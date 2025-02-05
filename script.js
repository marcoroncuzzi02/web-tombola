let numeri = document.getElementById('numeri')
let btn = document.getElementById('btn')
let numeroEstratto = document.getElementById('numero-estratto')


for (let i = 1; i <= 90; i++) {
    numeri.innerHTML += `
    <div class="casella casella-${i}">
        ${i}
    </div>
    `;
}

let numeroRandom
let arrayEstratti = []

function random() {
    numeroRandom = Math.floor(Math.random() * 90) + 1;
    if(!(arrayEstratti.includes(numeroRandom))){
        return numeroRandom
    }
    else{
        random()
    }
    
}

btn.addEventListener('click', function(){
    random()
    numeroEstratto.innerHTML = numeroRandom
    arrayEstratti.push(numeroRandom)
    console.log(numeroRandom)
})

let casellaRossa = document.querySelectorAll(`.casella-${numeroRandom}`)

console.log(casellaRossa)

casellaRossa.forEach(element => {
    element.className = element.classList + "red"
});

// const numeriRossi = arrayEstratti.map
