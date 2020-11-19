var express = require ('express');
var app = express ();




app.use(express.static('public'))


app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html');
});

app.listen(3000, (req, res) => {
  console.log(``)
})
