let api_key = '413993e253abd59bc55a18211c0bc1e9';
let dif_kelvin = 273.15
let url_base = 'https://api.openweathermap.org/data/2.5/weather'


document.getElementById("botonBusqueda").addEventListener('click',()=>{
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetctDatosClima(ciudad)
    }
})

function fetctDatosClima(ciudad) {
    fetch(`${url_base}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data =>mostarDatosClima(data))

}

function mostarDatosClima(data) {
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono =data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre} - ${paisNombre}`

    const temperaturaInfo = document.createElement('h3')
    temperaturaInfo.textContent = `La temperatura es ${Math.floor(temperatura -dif_kelvin)} grados C`

    const humedadInfo = document.createElement('h3')
    humedadInfo.textContent = `la humedad es de: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src=`https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('h4')
    descripcionInfo.textContent= `La descripcion meteorologica es ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)

}
