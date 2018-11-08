const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/web:id', (req, res) => {
    const id = req.params.id;
    axios.get(`https://btvn-web16s.herokuapp.com/api/web${id}`)
    .then((data) => {
        return res.render('web', {data: data.data.students})
    })
})

app.listen(3000, () => {
    console.log('Connected');
})