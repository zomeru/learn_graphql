import { GraphQLServer } from 'graphql-yoga';
import axios from 'axios';

const server = new GraphQLServer({
  typeDefs: `
    type Query {
      post: Post!
      posts: [Post!]
    }

     type Post {
        id: ID!
        title: String!
        author: String!

     }
  `,
  resolvers: {
    Query: {
      post: async () => {
        const response = await axios.get('http://localhost:3004/posts/1');

        return response.data;
      },

      posts: async () => {
        const response = await axios.get('http://localhost:3004/posts');

        return response.data;
      },
    },
  },
});

server.start(() => console.log('Server is running'));
