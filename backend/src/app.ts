const dotenv = require('dotenv');
dotenv.config({path: './.env.local'});

import {deleteTodoItems, handleTodoList} from "./todo-list";

const express = require('express');
const cors = require('cors');

const app = express();


const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded(({extended:false})));

app.get('/todo-list', handleTodoList);

app.post('/todo-items', deleteTodoItems);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});