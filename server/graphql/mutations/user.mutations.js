import { GraphQLObjectType, GraphQLString } from "graphql";
import { User } from "../../db/models/user.model.js";
import { UserType } from "../types/user.type.js";
import { generateCookie } from "../../utilities/generateToken.js";

export const UserMutations = new GraphQLObjectType({
  name: "UserMutations",
  fields: {
    register: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        gender: { type: GraphQLString },
        password: { type: GraphQLString },
        confirmPassword: { type: GraphQLString },
      },
      async resolve(parent, args, context) {
        const { username, gender, password, confirmPassword } = args;
        const userExists = await User.findOne({ username });
        if (userExists) {
          throw new Error("User already exists");
        }
        if (password !== confirmPassword) {
          res.status(404).json({ error: "passwords don't match" });
        }
        const user = new User({ username, gender, password });
        await user.save();
        const token = generateCookie(user._id);
        context.res.cookie("jwt", token, {
          maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
          httpOnly: true,
          sameSite: "strict",
        });
        return { ...user._doc, id: user._id, token };
      },
    },
    logout: {
      type: GraphQLString,
      async resolve(parent, args, context) {
        context.res.cookie("jwt", "", { maxAge: 0 });
        return "Logged out successfully";
      },
    },
  },
});
