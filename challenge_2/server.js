var express = require('express');
var app = express();
var PORT = 3000;

app.use(express.urlencoded());
app.use(express.static('client'));

app.get('/', (req, res) =>{
  
})

app.post('/', (req, res) => {
  var info = req.body;
  res.send(info);
})

app.listen(PORT, () => console.log(`PORT is listening on ${PORT}`));