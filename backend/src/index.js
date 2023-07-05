import express from 'express'
import * as dotenv from "dotenv";
import routes from './routes';
dotenv.config({path: __dirname + "/../.env"});

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const HOST = process.env.HOST ?? "localhost";

const app = express();

app.get('/', (req, res) => {
  res.send('Hello STEP 2023!')
});

app.use(routes);

app.listen(PORT, HOST, () => {
  console.log(`Backend running on http(s)://${HOST}:${PORT}`);
});