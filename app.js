import express from "express"
import mysql from "mysql"


const app = express();
const port = 4000;



app.use(express.json());
app.use(express.urlencoded());


const connection = mysql.createConnection({
    host: 'localhost',
    database: 'downStream',
    user: 'root',
    password: 'root',
})


app.get ("/post", function connectioncheck (req, res) {
    console.log("Connected to the front end")

})

app.post('/signup', function addUser(req, res) {
    const name = req.body.name
    const surname = req.body.surname
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    const date_of_birth = req.body.date_of_birth
    const country = req.body.country
    connection.query("INSERT INTO Users (Name, Surname, Username, Password, Email, Date_of_birth, Country) \
                    VALUES (?, ?, ?, ?, ?, ?, ?)", [name, surname, username, password, email, date_of_birth, country],
                    function(err,results) {
                    if (err) throw err
                    res.send(results)
                    }
                    
                                                    

                    )
                })
                    



   //first check to see if the username is already in use 
    // connection.query("SELECT * FROM Users WHERE Username = ?", [username],
    //                 function(err, results) {
    //                     if (err) throw err
    //                     if(results.length >0) {
    //                         res.send({message:"Username already exists"})
    //                     }
    //                 })
    //                     else{
app.post('/login', function login(req,res) {
    const email = req.body.email
    const password = req.body.password
    connection.query ("SELECT * from Users WHERE Email = ? AND Password =? " ,[email, password],
                        function(err, results) {
                            if (err) throw err
                            if (results.length <= 0) {
                                res.send({message: "Incorrect email or password"})
                                // converts the message into an object that we can display on the frontend
                                //can route back to the log in page here
                            }
                            else { 
                                res.send (results)
                                // can route here to the next page
                            }
                           
                        })
    
   
}
)

app.listen(port, function() {
    console.log(`Listening on port ${port}...`)
})