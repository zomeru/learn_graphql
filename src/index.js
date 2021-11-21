import { GraphQLServer } from 'graphql-yoga';

const server = new GraphQLServer({
  typeDefs: `
    type Query {
      agent: User!
      agents: [User!]
    }

     type User {
        id: ID!
        name: String!
        age: Int!
        married: Boolean!
        average: Float!
     }
  `,
  resolvers: {
    Query: {
      agent() {
        return {
          id: 1,
          name: 'Zomer',
          age: 23,
          married: true,
          average: 4.5,
        };
      },

      agents() {
        return [
          {
            id: 1,
            name: 'Zomer',
            age: 23,
            married: true,
            average: 4.5,
          },
          {
            id: 2,
            name: 'Zomer',
            age: 23,
            married: true,
            average: 4.5,
          },
        ];
      },
    },
  },
});

server.start(() => console.log('Server is running'));
