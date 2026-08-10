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
        res.send('Hello from new express apollo server!')
    })

    // TODO: import cors, and uncomment below, for production server for frontend
    // (rather than vite proxy for development)
    // app.use(cors({
    //     origin: 'https://pokergoblins.com'
    // }))
    // and obvs needs to target actual api backend rather than localhost:4000

    await mongoose.connect(process.env.MONGODB_URI);

    console.log('Mongoose connected');

    app.listen(4000, () => console.log('Server is running on port 4000'));
    
}

startServer();