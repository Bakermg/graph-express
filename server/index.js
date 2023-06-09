require('dotenv').config();
const express = require('express');
const colors = require('colors');
const schema = require('./schema/schema');
const cors = require('cors');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;


const { graphqlHTTP } = require('express-graphql');

const app = express();

// Connect Database
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port, console.log(`Server running on ${port}`));
