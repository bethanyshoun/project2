const randomWord = require('../../seeds/random-word-seeds')

const generateBtn = document.querySelector('#generate-word-btn');


const generateBtn = document.querySelector('.generate-word-btn');
/*
generateBtn.addEventListener("click", randomWord);
console.log("get word");
*/

generateBtn.addEventListener("click", randomWord (
    document.getElementById("")
),
{

});  

<script src= "/views/dashboard.handlebars"></script>
// <script src= "/views/generateword.handlebars"></script>

//  async function newWordHandler(event) {
//     event.preventDefault();
  
//     const title = document.querySelector('button[name="generateBtn"]').value;
    
//     const response = await fetch(`/api/randomwords`, {
//       method: 'GET',
//       body: JSON.stringify({
//         text
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
  
//     if (response.ok) {
//         document.location.reload();
//       } else {
//         alert(response.statusText);
//       }
//     }
  
//   document.querySelector('.generate-word').addEventListener('click', newWordHandler);
//   console.log(click);
