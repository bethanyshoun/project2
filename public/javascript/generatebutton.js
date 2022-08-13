async function generateWordHandler(event) {
    event.preventDefault();
    document.getElementById('random-word').hidden = false;
  }
  
  document.querySelector('#generate-word-btn').addEventListener('click', generateWordHandler);
    console.log("clicked");
  
  
      