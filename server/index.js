const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'demo',
});

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        'INSERT INTO user (userName, password) VALUES (?,?)', [username, password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Values inserted');
            }
        }
    );
});

app.get('/users', (req, res) => {
    db.query('SELECT * FROM user', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    });
});
app.listen(3001, () => {
    console.log('Server running on port 3001!');
});