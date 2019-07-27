const express = require('express')
const bodyParser = require('body-parser')

//Work out what this is doing!
const PORT = process.env.PORT || 3000
const dev = process.env.NODE_DEV !== 'production' //true false


//Import mongoose to manage the database
const mongoose = require('mongoose');


mongoose.connect('mongodb://topmoviesapp:PbItA8MSJkN7j3b0@localhost:27017/test', {useNewUrlParser: true})
//mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})


// express code here
const app = express()

//BodyParser start
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
    
//Api routes

let answerModel = require('./models/answerModel');

app.get('/api/answers/:category', (req, res) => {
    answerModel.find({category: req.params.category}, (err, answers) => {
        if(err) {return (res.send('Error occurred'))}

        res.json(answers)
    })  
})


app.get('/api/answers/:id', (req, res) => {
    answerModel.find({iD: req.params.id}, (err, answer) => {
        if(err) {return (res.send('Error occurred'))}

        res.json(answer)
    })

})


app.post('/api/answer/add', (req, res) => { 
    let answer = new answerModel( //Add statements to confirm all fields are saturated
        {
            author: req.body.author,
            content: req.body.content,
            title: req.body.title,
            ranking: req.body.ranking,
            catagory: req.body.catagory,
            iD: answerId
        }
    )

    answer.save((err, answer) => {
        if(err) {return (res.send('Error occurred (Code: 3)'))}

        res.json(answer)
    })
})

    //Bind app to port
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))

