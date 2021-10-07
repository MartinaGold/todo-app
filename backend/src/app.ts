import {handleTodoList} from "./todo-list";

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/api', createProxyMiddleware({
  target: 'http://localhost:3000/', //original url
  changeOrigin: true,
  //secure: false,
  onProxyRes: function (proxyRes: any, req: any, res: any) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
});

app.get('/todo-list', handleTodoList);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});