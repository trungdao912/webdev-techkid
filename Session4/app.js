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

app.get('/randomquestion', (req, res) => {
    
    const randQuestion = JSON.parse(fs.readFileSync(path.join(__dirname, 'question.json'), 'utf-8'));
    const randNum = Math.floor(Math.random() * randQuestion.length);
    res.render('random', {data: randQuestion[randNum].content});
})

app.get('/question/:id', (req, res) => {
    const id = req.params.id;
    
    const question = JSON.parse(fs.readFileSync(path.join(__dirname, 'question.json'), 'utf-8'));
    if (id < question.length) {
        res.render('id', {data: question[id].content});
    }
    else {
        res.render('404');
    }
})

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Server has started");
})
