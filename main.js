const GIF_API_KEY = 'jhnZ4FYM2Th5GS1EP87xTch1IxR7lcIb';
const WEATHER_API_KEY = 'ed685752c9664abeae8122501242406';

const submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const weather_request = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`;
    retrieveWeatherData(weather_request).then((result) => {
        const gif_request = `http://api.giphy.com/v1/gifs/translate?api_key=${GIF_API_KEY}&s=${result.city} ${result.description}`;
        retrieveGIF(gif_request).then((result) => {
            const img = document.querySelector('img');
            img.src = result;
        })
    });
})

async function retrieveGIF(request) {
    try {
        const response = await fetch(request, {mode: 'cors'});
        const gifData = await response.json();
        return gifData.data.images.original.url;
    } catch (err) {
        console.log(err);
    }
}

async function retrieveWeatherData(request) {
    try {
        const response = await fetch(request, {mode: 'cors'});
        const weatherData = await response.json();
        return {
            city: weatherData.location.name,
            description: weatherData.current.condition.text,
            temperature: weatherData.current.temp_c
        }
    } catch (err) {
        console.log(err);
    }
}