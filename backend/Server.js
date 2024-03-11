const express = require('express')
const mongoose = require('mongoose')
const employeeRoutes = require('./routes/employeeRoutes');
const loginRoutes = require('./routes/loginRoutes');
//const dataRoutes  = require('./routes/addBusRoutes');
const cors = require('cors');

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//Database connection
 mongoose.connect('mongodb://localhost:27017/employeeList', {useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('MongoDB connected successfully')});


  //Routes
 app.use('/api/employee', employeeRoutes);
 app.use('/api/login', loginRoutes);


 //server creation
app.listen(4000, ()=> { 
    console.log("server is running at 4000 ");
});