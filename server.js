import express from 'express';
import connectDB from './config/db';
import typeDefs from './modules/schemas';
import resolvers from './modules/resolvers';
import { ApolloServer } from 'apollo-server-express';
import getUser from './auth/getUser';

/* Oprettelse af en ApolloServer instans, og inkludering af TypeDefinitions
 * og Resolvers. Tilmed tilføjelse af token til Header Context
 */
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const tokenWithBearer = req.headers.authorization || '';
    const token = tokenWithBearer.split(' ')[1];
    const user = getUser(token);

    return {
      user
    };
  }
});

// Instans af express
const app = express();

// Connect Database
connectDB();

// Brug af express application som middleware til Apollo Serveren
apolloServer.applyMiddleware({ app });

// Sætter porten som express vil lytte på
app.listen({ port: 3000 }, () => {
  console.log(
    `Server kører på http://localhost:3000${apolloServer.graphqlPath}`
  );
});
