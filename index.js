var express = require('express'); // ExperssJS Framework
var app = express(); // Invoke express to variable for use in application
var port = process.env.PORT || 8080; // Set default port or assign a port in enviornment
var morgan = require('morgan'); // Import Morgan Package
var bodyParser = require('body-parser'); // Node.js body parsing middleware. Parses incoming request bodies in a middleware before your handlers, available under req.body.
var router = express.Router(); // Invoke the Express Router
var mysql      = require('mysql');
app.use(morgan('dev')); // Morgan Middleware
app.use(bodyParser.json()); // Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

var connection = mysql.createConnection({

    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'Hoztel'
  
  });
  
  connection.connect();
 
// Start Server
app.listen(port, function() {
    console.log('Running the server on port ' + port); // Listen on configured port
});

app.post('/user', function(req, res){

    var usernamess=req.body.name;
    var email = req.body.email;
    var dob = req.body.dob;
    var gender=req.body.gender;
    var address = req.body.address;
    var cityOfAddress = req.body.cityOfAddress;
    var country=req.body.country;
   var PassportNo = req.body.PassportNo;
   
    
    console.log(usernamess);
    var sql = "INSERT INTO `Hoztel`.`user` (`name`, `email`, `Dob`, `Gender`, `Address`,CityOfAddress,Country,PassPortNO) VALUES ("+ connection.escape(usernamess)+","+ connection.escape(email)+","+ connection.escape(dob)+","+ 
    connection.escape(gender)+ ","+connection.escape(address)+","+ connection.escape(cityOfAddress)+","+ connection.escape(country)+ ","+connection.escape(PassportNo)+")";
    connection.query(sql, function(err, result){
        if(err) throw err;
         console.log("1 record inserted");
    });

    res.send(usernamess);

});

app.post('/invoice', function(req, res){

    var userName=req.body.userName;
    var amount = req.body.amount;
    var userId  = req.body.userId;
    var billType =req.body.billType;
    var billId = req.body.billId; 
    var dateTime = req.body.dateTime; 

    var sql = "INSERT INTO `Hoztel`.`invoice` (`UserName`, `Amount`, `UserId`, `BillType`, `BillId`) VALUES ("+ connection.escape(userName)+","+ connection.escape(amount)+","+ connection.escape(userId)+","+ 
    connection.escape(billType)+ ","+connection.escape(billId) + ","+connection.escape(billId)+")";
    connection.query(sql, function(err, result){
        if(err) throw err;
         console.log("1 record inserted");
    });

    res.send(userName);
});
 

app.get('/get', function(req, res){
    console.log("Hi");
    
});