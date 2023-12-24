const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input')
const keyCheck = document.querySelector('.keys-check input')

// As teclas só vão tocar se estiver dentro da lista. Impede o JS de dar erro 
let mapedKeys= []

// Conecta a variável na pasta 
let audio = new Audio("../tunes/a.wav")

pianoKeys.forEach((key)=>{
    console.log(key.dataset.key);
    key.addEventListener('click', ()=> playTune(key.dataset.key))

    //adiciona as teclas na variável mapedKeys no looping inicial
    mapedKeys.push(key.dataset.key)
})

// Variável dinâmica. Pega todos os aúdios da pasta 
const playTune = (key) => {
    audio.src = `../tunes/${key}.wav`
    audio.play();
    
    console.log(mapedKeys)
    
    // Ativando o efeito de sombras com JS: 
    //pegar dinamicamente o data-key e adicionar a classe active
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add('active')
    setTimeout(()=>{
        clickedKey.classList.remove('active')
    }, 150)
}

// Usando as teclas do teclado
document.addEventListener('keydown', (e)=>{
    if (mapedKeys.includes(e.key)){
    console.log(e.key);
    playTune(e.key)}
})

//trabalhando com volume
const handleVolume = (e)=>{
    console.log(e.target.value)
    audio.volume = e.target.value;
}

//Slider de teclas
const showHideKeys = () =>{
    pianoKeys.forEach(key => key.classList.toggle('hide'))
}

// evento para o volume
volumeSlider.addEventListener('input', handleVolume)

//evento do slider de teclas
keyCheck.addEventListener('click', showHideKeys)



