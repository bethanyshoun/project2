async function generateWord() {
    const response = await fetch ('/api/words/', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'}

});

if (response.ok) {
    document.location.replace('/');
} else {
    alert(response.statusText);
}
}
document.querySelector('#generate-word-button').addEventListener('click', generateWord);


