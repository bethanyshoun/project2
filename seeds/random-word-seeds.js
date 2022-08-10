const { RandomWord } = require('../models')

const randomWordData = [
    {
        text: 'dog'
    },
    {
        text: 'firework'
    },
    {
        text: 'cheese'
    },
    {
        text: 'say'
    }, 
    {
        text: 'need'
    },
    {
        text: 'money'
    },
    {
        text: 'mountain'
    },
    {
        text: 'love'
    },
    {
        text: 'baby'
    },
    {
        text: 'crazy'
    },
    {
        text: 'hate'
    },
    {
        text: 'look'
    },
    {
        text: 'man'
    },
    {
        text: 'small'
    },
    {
        text: 'car'
    },
    {
        text: 'life'
    },
    {
        text: 'kill'
    },
    {
        text: 'cry'
    },
    {
        text: 'happy'
    },
    
]

const seedRandomWord = () => RandomWord.bulkCreate(randomWordData);

module.exports = seedRandomWord;