import { GraphQLObjectType, GraphQLList, GraphQLString } from "graphql";
import { User } from "../../db/models/user.model.js";
import { UserType } from "../types/user.type.js";
import { generateCookie } from "../../utilities/generateToken.js";

export const UserQueries = new GraphQLObjectType({
  name: "UserQueries",
  fields: {
    login: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      async resolve(parent, args, context) {
        const { username, password } = args;
        const user = await User.findOne({ username });
        if (!user || !(await user.matchPassword(password))) {
          throw new Error("Invalid credentials");
        }
        const token = generateCookie(user._id);
        context.res.cookie("jwt", token, {
          maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
          httpOnly: true,
          sameSite: "strict",
        });
        return { ...user._doc, id: user._id, token };
      },
    },
  },
});
