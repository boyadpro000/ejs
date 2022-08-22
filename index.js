const express = require('express')
const app = express()
const port = 3000
var data = require('./data/test.json');

app.set('view engine', 'ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  //res.send('Ola From Express!')
  var title = 'Our Home Page';
  var heading = 'My Website';
  res.render('pages/index', {
    'title':title,
    'heading':heading
  });
})

app.get('/users', (req, res) => {
  //res.send('Ola From Express!')
  var title = 'My Users Page';
  var heading = 'My Website';
  res.render('users/index', {
    'title':title,
    'heading':heading, 'users':data
  })
})

app.get('/Cars', (req, res) => {
  var title = "My Dream Car: McLaren P1"
  var heading = 'My Dream Car'
  res.render('pages/car',{
    'title':title,
    'heading':heading
  })
})

app.get('/Food', (req, res) => {
  var title = "My Favorite Food: Carne Asada Burrito"
  var heading = 'My Favorite Food'
  res.render('pages/food',{
    'title':title,
    'heading':heading
  })
})

app.get('/Computers', (req, res) => {
  var title = "My Favorite Hobby: Building Computers"
  var heading = 'My Favorite Hobby'
  res.render('pages/computers',{
    'title':title,
    'heading':heading
  })
})

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
  var heading = "My Website"
 res.render('users/view', {
     title: title,
   'heading':heading,
     user: data[--id]
 });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(data);
})