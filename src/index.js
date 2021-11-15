import { GraphQLServer } from 'graphql-yoga';

const server = new GraphQLServer({
  typeDefs: `
    type Query {
      id: ID!
      name: String!
      age: Int!
      married: Boolean!
      average: Float!
    }
  `,
  resolvers: {
    Query: {
      id() {
        return 1;
      },
      name() {
        return 'Zomer';
      },
      age() {
        return 23;
      },
      married() {
        return false;
      },
      average() {
        return 5.8;
      },
    },
  },
});

server.start(() => console.log('Server is running'));
