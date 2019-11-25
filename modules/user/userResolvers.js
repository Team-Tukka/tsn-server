import User from './models/User';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';

const userResolvers = {
  Query: {
    // Query til at hente alle brugere
    getUsers: async () => {
      const doc = await User.find({});
      // Hvis der er 0 brugere i databasen, så smider den en fejl
      if (doc.length === 0) {
        throw new Error('Ingen brugere fundet!');
      } else {
        return doc;
      }
    },
    async me(_, args, { user }) {
      if (!user) {
        throw new Error('Brugeren findes ikke');
      }
      return await User.findById(user.id);
    }
  },
  Mutation: {
    // Mutation til at oprette en ny bruger med iso dato og hash/salt på password
    addUser: async (parent, user) => {
      var date = new Date().getTimezoneOffset() * 60000;
      var isoDate = new Date(Date.now() - date).toISOString().slice(0, -5);
      const salt = await bcryptjs.genSalt(10);

      const newUser = await new User({
        firstName:
          user.firstName.trim()[0].toUpperCase() + user.firstName.slice(1),
        lastName:
          user.lastName.trim()[0].toUpperCase() + user.lastName.slice(1),
        mail: user.mail,
        password: await bcryptjs.hash(user.password, salt),
        adminRole: user.adminRole,
        address: user.address,
        zipCode: user.zipCode,
        phone: user.phone,
        created: isoDate,
        lastLogin: isoDate
      });
      const checkMail = await User.findOne({ mail: user.mail });
      if (checkMail) {
        throw new Error('Mailen er allerede i brug!');
      } else if (!newUser) {
        throw new Error('Brugeren kunne ikke oprettes!');
      } else {
        return newUser.save();
      }
    },

    // Login funktion med jsonwebtoken og bcryptjs
    login: async (_, args) => {
      var date = new Date().getTimezoneOffset() * 60000;
      var isoDate = new Date(Date.now() - date).toISOString().slice(0, -5);
      try {
        const user = await User.findOne({ mail: args.mail });
        if (!user) throw new Error('Din mail eller password er forkert');
        const passwordIsValid = bcryptjs.compareSync(
          args.password,
          user.password
        );

        if (!passwordIsValid)
          throw new Error('Din mail eller password er forkert');
        const token = jwt.sign({ id: user._id }, config.get('jwtSecret'), {
          expiresIn: '1d'
        });

        const updatedUser = await User.findOneAndUpdate(
          {
            mail: args.mail
          },
          {
            $set: { lastLogin: isoDate }
          },
          {
            new: true
          }
        );
        return { token, password: null, ...updatedUser._doc };
      } catch (err) {
        throw err;
      }
    },

    // Bekræfter token med user._id
    verifyToken: async (root, args, context, info) => {
      try {
        const decoded = jwt.verify(args.token, config.get('jwtSecret'));
        const user = await User.findOne({ _id: decoded.id });
        return { ...user._doc, password: null };
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = userResolvers;
