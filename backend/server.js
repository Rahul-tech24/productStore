import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/product.route.js';


dotenv.config();
const app = express();
import cors from 'cors';


app.use(cors({ origin: "http://localhost:5174" }));


app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/products', router);

app.listen(PORT, () => {
    connectDB();
  console.log(`Server is running on port ${PORT}`);
});
