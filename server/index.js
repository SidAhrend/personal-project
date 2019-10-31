require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
})

//app.use(session) will go here

const port = SERVER_PORT;
app.listen(port, () => console.log(`boolin on port ${port}`))