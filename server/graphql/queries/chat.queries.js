import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

import { Chat } from "../../db/models/chat.model.js";
import { MessageType } from "../types/message.type.js";
import { User } from "../../db/models/user.model.js";
import { UserType } from "../types/user.type.js";

export const ChatQueries = new GraphQLObjectType({
  name: "ChatQueries",
  fields: {
    getChat: {
      type: new GraphQLObjectType({
        name: "Chat",
        fields: {
          messages: { type: new GraphQLList(MessageType) },
        },
      }),
      args: {
        receiverId: { type: GraphQLString },
      },
      async resolve(parent, args, context) {
        const { receiverId } = args;
        const { userId } = context.req;

        const chat = await Chat.findOne({
          participants: { $all: [userId, receiverId] },
        }).populate("messages");

        if (!chat) {
          throw new Error("No chat found");
        }

        return { messages: chat.messages };
      },
    },
    usersWithChats: {
      type: new GraphQLList(UserType),
      async resolve(parent, args, context) {
        const userId = context.req.userId;
        console.log(userId);

        if (!userId) {
          throw new Error("User ID not found in context");
        }

        const chats = await Chat.find({ participants: userId });

        const participantIds = new Set();
        chats.forEach((chat) => {
          chat.participants.forEach((participantId) => {
            if (participantId.toString() !== userId) {
              participantIds.add(participantId);
            }
          });
        });
        const participantIdArray = Array.from(participantIds);

        const users = await User.find({
          _id: { $in: participantIdArray },
        });
        return users;
      },
    },
  },
});
