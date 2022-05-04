const llamarAPI = document.getElementById("llamar")
const nombre = document.querySelector("#nombre")
const div = document.getElementById("poster")
const form = document.querySelector(".form")
llamarAPI.addEventListener('click',CallAPI)


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
		'X-RapidAPI-Key': '1befd4d5aemshee8b3d5a2c1816ep10cd0bjsnc26a7d22663b'
	}
};


function CallAPI(){
fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${nombre.value}`, options)
	.then(response => response.json())
	.then(data => {
        const Array = data.d;
        Array.map((element)=>{
            console.log(element);
            const titulo = element.l
            const img = element.i.imageUrl
            const acotres = element.s
            const poster = `
            <div>
                <img src=${img}>
                <h2>${titulo}</h2>
                <p>${acotres}</p>
            </div>
                `
            document.getElementById("carta").innerHTML += poster
        })
    })
	.catch(err => console.error(err));

}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(nombre.value === ''){
        alert('Completa el campo');
        return
    }
    
})
