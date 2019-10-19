const app = require("express")();
const PORT = process.env.PORT|5000;
var proxy = require('http-proxy-middleware');


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });


app.listen(PORT, ()=>{
    console.log(`App listening on Port: ${PORT}`);
});