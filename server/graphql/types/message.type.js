import { GraphQLObjectType, GraphQLString } from "graphql";

export const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: {
    id: { type: GraphQLString },
    senderId: { type: GraphQLString },
    receiverId: { type: GraphQLString },
    message: { type: GraphQLString },
    createdAt: { type: GraphQLString },
  },
});
