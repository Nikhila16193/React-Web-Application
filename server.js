const express = require('express');
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

const config = {
    host: 'landintelligencetestdb.postgres.database.azure.com',
    user: 'sharedAdmin@landintelligencetestdb',     
    password: 'Lintel3!',
    database: 'postgres',
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


app.get('/postgres_employee', function (req, res, next) {
    client.query('SELECT * FROM Inventory where id = $1', [1], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send({ express: result.rows[0].name });
    });
});
// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });

app.get('/login', (req, res) => {
    client.query('SELECT * FROM users where email = $1' , [ 'nikhila@Landintelligence.net' ] , function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send({ express: result.rows[0].email });
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