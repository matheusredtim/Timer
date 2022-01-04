const relogio =  document.querySelector('.relogio')
const iniciar =  document.querySelector('.iniciar')
const pausar =  document.querySelector('.pausar')
const zerar =  document.querySelector('.zerar')
let timer 
let segundos = 0

function iniciarRelogio(){
    timer = setInterval(() => {
        segundos++
        relogio.innerHTML = criaHora( segundos)
        
    }, 1000);
}

function criaHora(segundos){
    const data = new Date(segundos*1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone:'UTC'

    })
}


iniciar.addEventListener('click',function (event) {
    relogio.style.color = 'green'
    clearInterval(timer)
    iniciarRelogio()
 
})
zerar.addEventListener('click',function (event) {
    relogio.style.color = 'black'
    segundos = 0
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    
})
pausar.addEventListener('click',function (event) {
    relogio.style.color = 'red'
    clearInterval(timer)
    
})