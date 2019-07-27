
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const answerSchema = new Schema({
    content: String,
    author: String,
    ranking: String,
    title: String,
    category: String
})

module.exports =  mongoose.model('answers', answerSchema);