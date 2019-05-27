
const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
// Express HBS engine handles
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs')


app.get('/', function (req, res) {
    res.render('home', {
        nombre: "Ignacio herreria",
    });
});


app.get('/about', function (req, res) {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`)
});
