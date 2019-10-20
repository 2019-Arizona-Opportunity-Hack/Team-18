const app = require("express")();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const PORT = process.env.PORT|5000;
var proxy = require('http-proxy-middleware');


const db = process.env.MONGO_URI;
//Connect to MONGODB
mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err, 'there is an error'));
//load models

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });


app.listen(PORT, ()=>{
    console.log(`App listening on Port: ${PORT}`);
});