import { GraphQLObjectType, GraphQLString } from "graphql";
export const EmptyQuery = new GraphQLObjectType({
  name: "Query",
  fields: () => ({}), // No fields defined
});
export const EmptyMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    _empty: {
      type: GraphQLString,
      resolve: () => "This is a placeholder mutation field.",
    },
  },
});
