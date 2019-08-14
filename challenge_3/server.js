const express = require('express');
const app = express();
app.use(express.static('./public'));
app.listen(3000, () => {console.log('Port is listening')});

app.use(express.urlencoded({extended: false}));

// app.post('/', (req, res){

// })