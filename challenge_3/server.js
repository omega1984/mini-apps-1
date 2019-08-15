const express = require('express');
const app = express();
app.use(express.static('./public'));
app.listen(3000, () => {console.log('Port is listening')})

app.use(express.urlencoded({extended: false}));

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
