import express from "express"
import mysql from "mysql"

const app = express()
const port = 4000

app.use(express.json());
app.use(express.urlencoded());

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'downStream',
    user: 'root',
    password: 'root',
})

app.post('/users/add', function addUser(req, res) {
    const name = req.body.name
    const surname = req.body.surname
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    const date_of_birth = req.body.date_of_birth
    const country = req.body.country
    connection.query("INSERT INTO Users (Name, Surname, Username, Password, Email, Date_of_birth, Country) \
                        VALUES (?, ?, ?, ?, ?, ?, ?)", [name, surname, username, password, email, date_of_birth, country],
                        function(err, results) {
                            if (err) throw err
                        })
    res.json(null)
})

app.listen(port, function() {
    console.log(`Listening on port ${port}...`)
})