import { GraphQLObjectType, GraphQLString } from "graphql";
import { MessageType } from "../types/message.type.js";
import { Message } from "../../db/models/message.model.js";
import { Chat } from "../../db/models/chat.model.js";
import { getReceiverSocketId, io } from "../../socket/socket.js";

export const MessageMutations = new GraphQLObjectType({
  name: "MessageMutations",
  fields: {
    createMsg: {
      type: MessageType,
      args: {
        receiverId: { type: GraphQLString },
        message: { type: GraphQLString },
      },
      async resolve(parent, args, context) {
        const { receiverId, message } = args;
        const senderId = context.req.userId;

        if (!senderId) {
          throw new Error("User ID is missing from the context.");
        }

        const newMessage = new Message({
          senderId,
          receiverId,
          message,
          createdAt: new Date(),
        });
        await newMessage.save();
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
          // io.to(<socket_id>).emit() used to send events to specific client
          io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        let chat = await Chat.findOne({
          participants: { $all: [senderId, receiverId] },
        });
        if (!chat) {
          chat = new Chat({
            participants: [senderId, receiverId],
            messages: [newMessage],
          });
        } else {
          chat.messages.push(newMessage);
        }
        await chat.save();

        // SOCKET IO FUNCTIONALITY WILL GO HERE

        return newMessage;
      },
    },
  },
});
