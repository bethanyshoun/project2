const { RandomWord } = require('../models')

const randomWordData = [
    {
        text: 'Dog'
    },
    {
        text: 'firework'
    },
    {
        text: 'cheese'
    }
]

const seedRandomWord = () => RandomWord.bulkCreate(randomWordData);

module.exports = seedRandomWord;