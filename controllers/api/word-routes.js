const router = require('express').Router();
const { RandomWord } = require('../../models');


router.get('/', (req, res) => {
    console.log("==== Getting Random Word ====");
  RandomWord.findAll()
    .then(dbWordData => { 
        res.json(dbWordData)
        console.log(dbWordData.random_word); 
        const wordsArray = []
        const words = dbWordData.map(word => {
            console.log(word.text);
        wordsArray.push(word.text)
        console.log(words);

    })
console.log(wordsArray);

    var randomWord = wordsArray [Math.floor(Math.random() * wordsArray.length)]
    console.log(randomWord)
   
})
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
   
}); 


// router.get('../../views/partials/dashboard.handlebars', (req, res) => {
//     res.render('wordsArray', { Word: 'wordsArray'});
// });

// router.get('../../views/dashboard.handlebars', (req, res) => {
//     res.render('wordsArray', { Word: 'wordsArray'});
// });



module.exports = router;