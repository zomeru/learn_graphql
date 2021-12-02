import { GraphQLServer } from 'graphql-yoga';
import axios from 'axios';

const server = new GraphQLServer({
  typeDefs: `
    type Query {
      post(id: ID!): Post!
      posts: [Post!]
      multiply(value: Int!): Int
    }

     type Post {
        id: ID!
        title: String!
        author: String!

     }
  `,
  resolvers: {
    Query: {
      post: async (parent, args, context, info) => {
        const response = await axios.get(
          `http://localhost:3004/posts/${args.id}`
        );

        return response.data;
      },
      posts: async () => {
        const response = await axios.get('http://localhost:3004/posts');

        return response.data;
      },
      multiply: async (parent, args, context, info) => {
        return args.value * 10;
      },
    },
  },
});

server.start(() => console.log('Server is running'));
