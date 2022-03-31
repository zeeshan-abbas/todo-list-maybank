import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { todoRoutes } from './src/routes/index.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json())
app.use(cors())

app.use('/api/todo', todoRoutes);

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
})
