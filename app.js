const express = require('express')
const app = express()
const port = 3000
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
require('dotenv/config');


// Import Routes
const certRoute = require('./routes/certs')

app.use('/certs', certRoute);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});



// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
{ useNewUrlParser: true },
() => console.log('connected to DB')
);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
