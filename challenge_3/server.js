const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}));

app.listen(3000, () => {console.log('Port is listening')})


var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'omega1984',
  password : '1917',
  database : 'forms'
});

db.connect(err => {
  if (err){
    console.log(err);
  }
  console.log('Database is connected');
});

var userData = {};

app.post('/form1', (req, res) => {
  console.log("form1")
  if (Object.values(req.body).includes("")){
    res.sendStatus(400);
  }else{
    for (var key in req.body){
      userData[key] = req.body[key];
    }
    res.status(200);
    res.send('sucess submit');
  }
});

app.post('/form2', (req, res) => {
  console.log("form1")
  if (Object.values(req.body).includes("")){
    res.sendStatus(400);
  }else{
    for (var key in req.body){
      userData[key] = req.body[key];
    }
    res.status(200);
    res.send('sucess submit');
  }
});

app.post('/form3', (req, res) => {
  console.log("form1")
  if (req.body === undefined){
    res.sendStatus(400);
  }else{
    for (var key in req.body){
      userData[key] = req.body[key];
    }
    console.log(userData);
    const sql = `INSERT INTO form1 (user_name, user_email, password, address1, address2, city, state, zip, expiration, cvv)
      VALUES (?,?,?,?,?,?,?,?,?,?)`
    db.query(sql, [userData.name, userData.email, userData.password, userData.addressLine1, userData.addressLine2, userData.city, userData.states, userData.zip, userData.expiration, userData.CVV],
      (err, data) => {
        if (err) console.log(err);
        else{
          res.status(200);
          res.send('sucess submit');
        }
      });
  }
});
