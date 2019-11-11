import User from "./models/User";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";

const userResolvers = {
  Query: {
    getUsers: async () => await User.find({}),
    async me(_, args, { user }) {
      if (!user) {
        throw new Error("Brugeren findes ikke");
      }
      await User.findById(user.id);
    }
  },
  Mutation: {
    addUser: async (parent, user) => {
      const salt = await bcryptjs.genSalt(10);

      const newUser = await new User({
        firstName: user.firstName,
        lastName: user.lastName,
        mail: user.mail,
        password: await bcryptjs.hash(user.password, salt),
        adminRole: user.adminRole,
        address: user.address,
        zipCode: user.zipCode,
        phone: user.phone
      });
      return newUser.save();
    },

    // Login funktion med jsonwebtoken og bcryptjs
    login: async (_, args) => {
      try {
        const user = await User.findOne({ mail: args.mail });
        if (!user) throw new Error("Din mail eller password er forkert");
        const passwordIsValid = await bcryptjs.compareSync(
          args.password,
          user.password
        );
        if (!passwordIsValid)
          throw new Error("Din mail eller password er forkert");
        const token = jwt.sign({ id: user._id }, config.get("jwtSecret"), {
          expiresIn: "1d"
        });

        return { token, password: null, ...user._doc };
      } catch (err) {
        throw err;
      }
    },

    // Bekræfter token med user._id
    verifyToken: async (root, args, context, info) => {
      try {
        const decoded = jwt.verify(args.token, config.get("jwtSecret"));
        const user = await User.findOne({ _id: decoded.id });
        return { ...user._doc, password: null };
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = userResolvers;
