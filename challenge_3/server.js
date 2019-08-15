const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}));

app.listen(3000, () => {console.log('Port is listening')})

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'omega1984',
  password : '1917',
  database : 'forms'
});

connection.connect(err => {
  if (err){
    console.log(err);
  }
  console.log('Database is connected');
});

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// connection.end();

app.post('/form1', (req, res) => {
  console.log("form1")
  if (Object.values(req.body).includes("")){
    res.sendStatus(400);
  }else{
    res.status(200);
    res.send('sucess submit');
  }
});

app.post('/form2', (req, res) => {
  console.log("form1")
  if (Object.values(req.body).includes("")){
    res.sendStatus(400);
  }else{
    res.status(200);
    res.send('sucess submit');
  }
});

app.post('/form3', (req, res) => {
  console.log("form1")
  if (Object.values(req.body).includes("")){
    res.sendStatus(400);
  }else{
    res.status(200);
    res.send('sucess submit');
  }
});
