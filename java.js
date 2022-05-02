window.addEventListener('load',()=>{
    let lon 
    let lat 

    let temperaturaValor = document.getElementById("temperatura-valor")
    let temperaturaDescripcion = document.getElementById("temperatura-descripcion")

    let ubicacion = document.getElementById("ubicacion")
    let iconoAnimado = document.getElementById("icono-animado")

    let velocidadDelViento = document.getElementById("viento-velocidad")

    let humedad = document.getElementById("humedad")

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion =>{
            //console.log(posicion)
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            //acceso a ubicacion
            const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&appid=ff0cc9bf690bd9c9c968b632ddd097ef`

            //console.log(url)

            fetch(url)
            .then(Response =>{ return Response.json() })
            .then(data =>{
                let temp = Math.round(data.main.temp - 271)
                temperaturaValor.textContent = `${temp} ºC`

                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc

                ubicacion.textContent = data.name

                velocidadDelViento.textContent = `${Math.round(data.wind.speed*4.6)} Km/h`

                humedad.textContent = `${data.main.humidity} %`

                console.log(data)

                switch (data.weather[0].main){
                    case 'Thunderstorm':
                      iconoAnimado.src='animated/thunder.svg'
                      console.log('TORMENTA');
                      break;
                    case 'Drizzle':
                      iconoAnimado.src='animated/rainy.svg'
                      console.log('LLOVIZNA');
                      break;
                    case 'Rain':
                      iconoAnimado.src='animated/rainy-2.svg'
                      console.log('LLUVIA');
                      break;
                    case 'Snow':
                      iconoAnimado.src='animated/snowy-6.svg'
                        console.log('NIEVE');
                      break;                        
                    case 'Clear':
                        iconoAnimado.src='animated/day.svg'
                        console.log('LIMPIO');
                      break;
                    case 'Atmosphere':
                      iconoAnimado.src='animated/weather.svg'
                        console.log('ATMOSFERA');
                        break;  
                    case 'Clouds':
                        iconoAnimado.src='animated/cloudy-day-1.svg'
                        console.log('NUBES');
                        break;  
                    default:
                      iconoAnimado.src='animated/cloudy-day-1.svg'
                      console.log('por defecto');
                }


            })
            .catch (error =>{
                console.log(error)
            })
        })
    }
})
