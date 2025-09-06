const express = require('express')
const app = express()
const connectDB = require('./config/db')
const dotenv = require('dotenv');
const productRoutes = require('./Routes/productRoutes');


const port = process.env.PORT ;

dotenv.config();
connectDB();
app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api',productRoutes)

app.listen(port, () => {
  console.log(` listening on port ${port}`)
})
