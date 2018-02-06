'use strict';

//SET-UP
const express = require('express');
const app = express();
const PORT = process.env.PORT;

const pg = require('pg');
const conString = process.env.DATABASE_URL;
const client = new pg.Client(conString);
client.connect();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const cors = require('cors');
app.use(cors());

//POSTS
app.post('/', (req,res) => {
  console.log('handling /');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
