const result = document.querySelector(".result");
const form = document.querySelector(".get-weather");
const nameCity = document.querySelector("#city");
const nameCountry = document.querySelector("#country");


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(nameCity.value === '' || nameCountry.value === ''){
        showError('Completa ambos campos');
        return
    }

    
    callApi(nameCity.value, nameCountry.value);
})

function callApi(city, country){
    const  apiID = 'ff0cc9bf690bd9c9c968b632ddd097ef';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=es&appid=${apiID}`;

    fetch(url)
        .then(data =>{
            return data.json();
        })
        .then (dataJSON=>{
            if (dataJSON.cod === 404){
                showError('Ciudad no encontrada')
            }else{
                clearHTML();
                showWeather(dataJSON);
            }
        })
        .catch(error=>{
            console.log(error);
        })

}


function showWeather(data){
    const {name, main:{temp, temp_min, temp_max,humidity}, weather:[arr],wind:{speed}} = data;

    const degress = kelvintoC(temp)
    const min = kelvintoC(temp_min)
    const max = kelvintoC(temp_max)
    const humedad = (humidity)
    const vel = MsobreStoKmh(speed)

    const content = document.createElement('div');
    content.innerHTML =`
            <div id="caja1">
                <h5>Clima en: ${name}</h5>
            </div>

            <div id="caja2"><p>${arr.description}</p>
                <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="">
            </div>

            <div id="caja3">
                <h2>Temp: ${degress} ºC</h2>
            </div>

            <div id="caja4">
                <p>Temp Max: ${max} ºC</p>
            </div>

            <div id="caja5">
                <p>Temp Min: ${min} ºC</p>
            </div>

            <div id="caja6">
                <p>Humedad: ${humedad} %</p>
            </div>

            <div id="caja6">
                <p>Velocidad del viento: ${vel} Km/h</p>
            </div>
            `;

    result.appendChild(content);
console.log(data);

}

function showError(message){
    console.log(message);
    const alert = document.createElement('p');
    alert.classList.add('alerta-campos');
    alert.innerHTML = message;


    form.appendChild(alert);
    setTimeout(()=>{
        alert.remove();
    },2000);
}

function kelvintoC(temp){
    return parseInt(temp - 273.15);
}

function MsobreStoKmh(speed){
    return parseInt(speed * 3.6)
}

function clearHTML(){
    result.innerHTML = ''
}
