const express = require('express');
const bodyParser = require('body-parser');
// const employeeRoutes = require('./routes/employeeRoutes');
// const userRoutes = require('./routers/authRoutes/userRoutes');
// const productsRoutes = require('./routers/productsRoutes/productsRoutes');
const Qns = require('./routers/qnsRouters/qnsRoutes')

// const productsRoutes = require('./routes/productsRoutes/productsRoutes');
const connectDatabase = require('./db/Database');
require('dotenv').config({path: './config/.env'});
const cors = require("cors");


const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());





connectDatabase();

// Routes
app.use('/', Qns);
// app.use('/', productsRoutes);
// app.use('/', order);

// app.use('/api/payment', paymentRoutes);







module.exports = app;
