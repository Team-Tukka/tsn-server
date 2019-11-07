import User from "./models/User";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";

const userResolvers = {
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
    }
  }
};

module.exports = userResolvers;
