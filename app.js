const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){

    let firstName = req.body.fname;
    let LastName = req.body.lname;
    let email = req.body.email;

    console.log(firstName, LastName, email);
});

app.listen(3000, function(){
    console.log("Server berjalan di port 3000 !");
});