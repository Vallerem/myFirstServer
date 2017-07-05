const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true }));

app.use(expressLayouts);
app.set('layout', 'layouts/main')
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));

function myMiddleware(req, res, next) {
  console.log("ey i'm a middleware 😳 😳 😳 😳 😳 😳 😳 😳 😳 😳 😳 😳 😳 😳 😳 ");
 req.secret = 'secret';
 next();
}

// app.use(myMiddleware);

app.get('/', myMiddleware, (request, response, next) => {
  // console.log('secret', request.secret);
  // console.log('request', request);
  
  const name = 'ironahck';
  const cities = ['BCN', 'MAD', 'PAR', 'MIA'];
  const bool = true;
  response.render('index', { name, cities, bool });
})

app.get('/about', (req, res, next) => {
  // console.log('/about');
  res.render('about')
})

app.get('/login', (req, res) => {
  res.render('login', { layout: 'layouts/login'} )
})

app.get('/form', (req, res) => {
  res.render('form');
})

app.post('/', (req, res)=>{
  // console.log('method POST', req);
  // console.log('body', req.body);
  res.redirect('/about');
})

app.listen( 3000, () => {
  console.log('Listening in port 3000');
})

