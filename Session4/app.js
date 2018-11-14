const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const fs = require('fs');

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get("/ask", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.post("/ask", (req, res) => {
    const questions = JSON.parse(fs.readFileSync(path.join(__dirname, 'question.json'), 'utf-8'));
    let newQuestion = {
        id: questions.length,
        yes: 0,
        no: 0,
        content: req.body.question
    }

    questions.push(newQuestion);
    fs.writeFileSync(path.join(__dirname, 'question.json'), JSON.stringify(questions));
    res.redirect('/');
})

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Server has started");
})
