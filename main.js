const GIF_API_KEY = 'jhnZ4FYM2Th5GS1EP87xTch1IxR7lcIb';


const searchBtn = document.getElementById('search-btn');
const img = document.querySelector('img');

searchBtn.addEventListener('click', () => {
    const searchText = document.querySelector('input').value;
    const URL = `http://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchText}`;

    retrieveGIF(URL);
})

async function retrieveGIF(url) {
    try {
        const response = await fetch(url, {mode: 'cors'});
        const gifData = await response.json();
        img.src = gifData.data.images.original.url;
    } catch (err) {
        console.log(err);
    }
}