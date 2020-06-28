import {schema} from "./src/schema";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {getUserId} from "./src/utils";

const {ApolloServer} = require('apollo-server');

dotenv.config();

mongoose.connect(process.env["MONGO_URL"], { useNewUrlParser: true, useUnifiedTopology: true });

const server = new ApolloServer({
    schema,
    context: ({req}) => {
        // const token = req.headers.authorization || '';
        // const userId = getUserId(token);
        //
        // return {userId};
    }
});

server.listen().then(({url}) => {
    console.log(`Server is running here : ${url}`);
});