import 'dotenv/config';
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers.js';
import mongoose from 'mongoose';

async function startServer() {
    const app = express()

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [
            ApolloServerPluginLandingPageLocalDefault()
        ],
    });

    await apolloServer.start();

    app.use(express.json());

    app.use('/graphql', expressMiddleware(apolloServer));

    app.use((req, res) => {
        res.send('Hello from express apollo server!')
    })

    await mongoose.connect(process.env.MONGODB_URI);

    console.log('Mongoose connected');

    app.listen(4000, () => console.log('Server is running on port 4000'));
    
}

startServer();