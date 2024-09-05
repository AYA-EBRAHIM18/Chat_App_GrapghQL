import { GraphQLObjectType, GraphQLString } from "graphql";
import { MessageType } from "./message.type.js";

export const ChatType = new GraphQLObjectType({
  name: "Chat",
  fields: {
    id: { type: GraphQLString },
    id: { type: GraphQLString },
    participants: { type: new GraphQLList(GraphQLString) },
    messages: { type: new GraphQLList(MessageType) },
  },
});
