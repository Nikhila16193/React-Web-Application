const express = require('express');
const cors = require("cors");

const pg = require('pg');

const config = {
    host: 'landintelligencetestdb.postgres.database.azure.com',
    user: 'sharedAdmin@landintelligencetestdb',
    password: 'Lintel3!',
    database: 'landintelligencedb',
    port: 5432,
    ssl: true
};

const client = new pg.Client(config);
client.connect();



var app = express();

app.set('port', process.env.PORT || 5000);
const whitelist = ["http://localhost:3000"];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
};

app.use(cors(corsOptions));


// Basic test for server connection
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});


//Basic Get values test
app.get('/postgres_employee', function (req, res, next) {
    client.query('SELECT * FROM tbl_land_score_form where landscorce_id = $1', [1], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send({ express: result.rows[0].property_address });
    });
});

//Test for Login
app.get('/login', (req, res) => {
    client.query('SELECT * FROM users where email = $1', ['nikhila@Landintelligence.net'], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send({ express: result.rows[0].email });
    });
});


//Basic Insert Test
app.post('/InsertTest', (req, res) => {
    client.query("CALL SP_Insert_Test( $1, $2) ", [1, 'Test Property Inserted through Node.js'], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send({ express: "User added with ID:" });
    });
});


//Basic SP based data insertion 
app.post('/LandScore', (req, res) => {
    client.query("CALL SP_Insert_My_Land_Scores ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 , $12 , $13, $14, $15, $16, $17, $18 , $19 , $20 , $21 , $22, $23) ", [1, "'Test Property Inserted through Node.js'", 1, 1, 5, 5, 4, 3, 5, 5, 4, 5, 3, 3, 3, 3, 3, 1, 0, 5, 5, 1, 1], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send({ express: "User added with ID:" });
    });
});


//Actual myLandscoreform insertion
app.post('/landscores', function (req, res) {
    //This code block has to be optimized
    var propertyaddress = req.query.address;
    var shapeoftract = req.query.shapeoftract;
    var sizeoftract = req.query.sizeoftract;
    var floodimpact = req.query.floodimpact;
    var zoining = req.query.zoining;
    var accesstotract = req.query.accesstotract;
    var topography = req.query.topography
    var wateravailability = req.query.wateravailability
    var seweravailability = req.query.seweravailability
    var proximitytomajorhighways = req.query.proximitytomajorhighways;
    var transportationplan = req.query.transportationplan;
    var utilitytransmissionlines = req.query.utilitytransmissionlines;
    var schooldistrict = req.query.schooldistrict;
    var proximitytoelemiddleschool = req.query.proximitytoelemiddleschool;
    var proximitytohighschool = req.query.proximitytohighschool;
    var sellermotivation = req.query.sellermotivation;
    var capitalimprovementbudget = req.query.capitalimprovementbudget;
    //Passing property parcel id as 1 for now. 
    //These four fields are currently not being pulled from Form : listed , rezoning_or_overlay_possible 
    //At some point of time we need to figure out to calculate total_scorce, percentage , grade from the react front end.
    client.query("CALL SP_Insert_My_Land_Scores ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 , $12 , $13, $14, $15, $16, $17, $18 , $19 , $20 , $21 , $22, $23) ", [1, propertyaddress, shapeoftract, sizeoftract, floodimpact, zoining, accesstotract, topography, wateravailability, seweravailability, proximitytomajorhighways, transportationplan, utilitytransmissionlines, schooldistrict, proximitytoelemiddleschool, proximitytohighschool, sellermotivation, capitalimprovementbudget, 5, 5, 5, 5, null], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send({ express: "User added with ID:" });
    });
});


//Test for getting all values in Tbl_Land_score_Form
app.get('/getalllandscores', function (req, res) {
    client.query('SELECT * FROM Tbl_Land_score_Form ', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send({ express: result });
        console.log(req.params);
    });
});


app.listen(5000, function () {
    console.log('Server is running.. on Port 5000');
});


