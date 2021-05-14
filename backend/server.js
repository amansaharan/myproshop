import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import products from './data/products.js';

dotenv.config();
connectDB();

const app = express();

app.get('/api/products', (req, res) => {
  res.send(products);
});

app.get('/api/product/:id', (req, res) => {
  const product = products.find((p) => (p._id = req.params.id));
  res.send(product);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Server is running on ${port} and is in ${process.env.NODE_ENV} mode.`
      .bgMagenta.bold
  );
});
