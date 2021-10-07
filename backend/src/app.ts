import {deleteTodoItems, handleTodoList} from "./todo-list";
import bodyParser from "body-parser";
const { createProxyMiddleware } = require('http-proxy-middleware');

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(
  bodyParser.json())

app.use('/api', createProxyMiddleware({
  target: 'http://localhost:3000/', //original url
  changeOrigin: true,
  //secure: false,
  onProxyRes: function (proxyRes: any, req: any, res: any) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

app.get('/todo-list', handleTodoList);

app.post('/todo-items', deleteTodoItems);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});