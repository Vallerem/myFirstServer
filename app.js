const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.use(express.static('public'));

app.use(expressLayouts);
app.set('layout', 'layouts/main')
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (request, response, next) => {
  console.log("i'm in index");
  const name = "ironhack";
  const cities = ['BCN', 'MAD', 'PAR', 'MIA'];
  const bool = true;
  response.render('index', { name, cities, bool });
})

app.get('/about', (req, res, next) => {
  console.log('/about');
  res.render('about')
})

app.get('/login', (req, res) => {
  res.render('login', { layout: 'layouts/login'} )
})

app.listen( 3000, () => {
  console.log('Listening in port 3000');
})

