const getBtn= document.querySelector('#getReq')
const TxtArea= document.querySelector('#txtArea')
const display= document.querySelector('#display')
const locationBox = document.querySelector('.locationBox')
const date = document.querySelector('.date')

let city
getBtn.addEventListener('click', () => {

    city = TxtArea.value

    if(city != ''){
        city = TxtArea.value
        fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d18828185d71c238c11c35c2d12b7eb&units=metric`)
        .then (weather =>{
        return weather.json()
    })
    .then(res =>{
        display.textContent=`${Math.round(res.main.temp)}°C`
        locationBox.textContent=`${res.name}, ${res.sys.country}`;
        document.querySelector('.container').style.backgroundImage= "url('./images/warm-bg.jpg')"
    })

    TxtArea.value=''

    }else{
        TxtArea.value= ''
        locationBox.textContent = ''
        display.textContent= 'Enter Valid City'
        document.querySelector('.container').style.backgroundImage= "url('./images/cold-bg.jpg')"
    }

    
    const jsDate = `${dateBuilder(new Date())}`

    date.innerHTML= `${jsDate}`
    document.querySelector('.container').style.backgroundImage= "url('./images/warm-bg.jpg')"
    
    const dateBuilder = (d) => {
        let months = ["January" , "Februaury" , "March" , "April" , "May" , "June" , "July" , "August" , "September" ,
                        "October" , "November" , "December"];
        let days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
    
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date}, ${month} ${year}`
    }

})

TxtArea.addEventListener("onkeypress", (event)=>{
    event.preventDefault()
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


