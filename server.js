var express = require('express'),
    app = express()
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    productModel= require('./models/productModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
var options = { useNewUrlParser: true };       
 
//var mongodbUri = 'mongodb://<user>:<password>@<db-url>:35413/<db-name>';
var mongodbUri = 'mongodb://productdev:productdev1@ds249503.mlab.com:49503/product-dev'
mongoose.connect(mongodbUri, options);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routesproductRoutes = require('./routes/productRoutes'); //importing route
routesproductRoutes(app); //register the route

app.listen(port);
console.log('TEMPLATE API server started on: ' + port);