const getBtn= document.querySelector('#getReq')
const TxtArea= document.querySelector('#txtArea')
const display= document.querySelector('#display')
const locationBox = document.querySelector('.locationBox')
const date = document.querySelector('.date')

let city
getBtn.addEventListener('click', () => {
    city = TxtArea.value
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d18828185d71c238c11c35c2d12b7eb&units=metric`)
    .then (weather =>{
        return weather.json()
    })
    .then(res =>{
        display.textContent=`${Math.round(res.main.temp)}°C`
        locationBox.textContent=`${res.name}, ${res.sys.country}`;
        date.textContent= `${(Date.now())}`
    })

    TxtArea.value=''

    document.querySelector('.container').style.backgroundImage= "url('./images/warm-bg.jpg')"


})
