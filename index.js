const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/litcoin.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/litcoin.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.get('/eth.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/eth.html'));
});

//add the router
app.use('/', router);

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
