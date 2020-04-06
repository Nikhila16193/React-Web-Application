const express = require('express');
const cors = require("cors");
// const { Client } = require('pg');
//const connectionString = 'postgres://postgres:Hareesh@localhost:6060/test';
//const connectionString = 'postgres://sharedAdmin@landintelligencetestdb:Lintel3!@landintelligencetestdb.postgres.database.azure.com:5432/postgres?ssl = true';
// const pool = new pool({
//         host: '',
//         user: '',
//         port : 5432,
//         idleTimeoutMillis: 30000,
//         connectionTimeoutMillis: 2000,
// })

const pg = require('pg');

// const config = {
//     host: 'localhost',
//     user: 'postgres',
//     password: 'Hareesh',
//     database: 'landintelligencedb',
//     port: 6060
//     //ssl: true
// };

const config = {
    host: 'landintelligencetestdb.postgres.database.azure.com',
    user: 'sharedAdmin@landintelligencetestdb',
    password: 'Lintel3!',
    //database: 'postgres',
    database: 'landintelligencedb',
    port: 5432,
    ssl: true
};

const client = new pg.Client(config);

// client.connect(err => {
//     if (err) throw err;
//     else { queryDatabase(); }
// });
// const client = new Client({
//     connectionString: connectionString
// });
client.connect();



var app = express();
//const app = express();
//const port = process.env.PORT || 5000;
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


// app.get('/postgres_employee', function (req, res, next) {
//     client.query('SELECT * FROM Inventory where id = $1', [1], function (err, result) {
//         if (err) {
//             console.log(err);
//             res.status(400).send(err);
//         }
//         res.status(200).send({ express: result.rows[0].name });
//     });
// });

app.get('/postgres_employee', function (req, res, next) {
    client.query('SELECT * FROM tbl_land_score_form where landscorce_id = $1', [1], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send({ express: result.rows[0].property_address });
    });
});


// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/login', (req, res) => {
    client.query('SELECT * FROM users where email = $1', ['nikhila@Landintelligence.net'], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send({ express: result.rows[0].email });
    });
});

//exec LoginMember @SSN='" + ssn + "', @PASSWORD='" + password + "';

app.post('/InsertTest', (req, res) => {
    client.query("CALL SP_Insert_Test( $1, $2) ", [1, 'Test Property Inserted through Node.js'], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send({ express: "User added with ID:" });
    });
});

app.post('/LandScore', (req, res) => {
    client.query("CALL SP_Insert_My_Land_Scores ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 , $12 , $13, $14, $15, $16, $17, $18 , $19 , $20 , $21 , $22, $23) ", [1, "'Test Property Inserted through Node.js'", 1, 1, 5, 5, 4, 3, 5, 5, 4, 5, 3, 3, 3, 3, 3, 1, 0, 5, 5, 1, 1], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send({ express: "User added with ID:" });
    });
});

app.post('/landscores', function (req, res) {
    var propertyaddress = req.query.address;
    var sizeoftract = req.query.score0;
    var shapeoftract = req.query.score1;
    var floodimpact = req.query.score2;
    var zoining = req.query.score3
    // console.log(req.params);
    // console.log(req.rows);
    // console.log(req.body);
    // console.log(req.query.address);
    client.query("CALL SP_Insert_My_Land_Scores ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 , $12 , $13, $14, $15, $16, $17, $18 , $19 , $20 , $21 , $22, $23) ", [1, propertyaddress, sizeoftract, shapeoftract, floodimpact, zoining, 4, 3, 5, 5, 4, 5, 3, 3, 3, 3, 3, 1, 0, 5, 5, 1, 1], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send({ express: "User added with ID:" });
    });
});


app.get('/getalllandscores', function (req, res) {
    //  console.log("I am inside the Getalllandscores method");
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


// // console.log that your server is up and running
// app.listen(port, () => console.log(`Listening on port ${port}`));
//Comments
// const express = require('express');
// var app = express();
// app.set('port', process.env.PORT || 4000);

// app.get('/', function (req, res, next) {
//     client.query('SELECT * FROM Employee where id = $1', [1], function (err, result) {
//         if (err) {
//             console.log(err);
//             res.status(400).send(err);
//         }
//         res.status(200).send(result.rows);
//     });
// });
// app.listen(4000, function () {
//     console.log('Server is running.. on Port 4000');
// })