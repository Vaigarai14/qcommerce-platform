import express from 'express';
import router from './routes/product.js'
import { config } from 'dotenv';
import connectToDatabase from './config/db.js';

config();
connectToDatabase();

const app = express();

app.use(router)

const port = 1428

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default server;