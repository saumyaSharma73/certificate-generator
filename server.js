const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectDb = require('./views/utils/db')
require('dotenv').config();


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  res.render('index');
});


app.post('/generate', (req, res) => {
  const { recipientName } = req.body;
  
  res.render('certificate', { recipientName });
});

console.log('MONGO_URI:', process.env.MONGO_URI);


connectDb().then(() =>{
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
});
