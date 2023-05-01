
function carregar(){

var horas = new Date
var hora = horas.getHours()
var minuto = horas.getMinutes()

/*var hora = 19
var minuto = 20*/


var periodo = window.document.querySelector('div#hora')
periodo.innerHTML = `Agora são ${hora}:${minuto}`

var imagem = window.document.querySelector('img#imagem')
if (hora >= 0 && hora <12) {
    //bom dia #607d9f
    imagem.src = 'manha.jpg'
    document.body.style.background = '#607d9f'

} else if(hora >12 && hora < 18){
    //boa tarde #ffab51
    imagem.src = 'tarde.jpg'
    document.body.style.background = '#ffab51'
}else{
    //boa noite #132a3a
    imagem.src = 'noite.jpg'
    document.body.style.background = '#132a3a'
}
}

setInterval (carregar, 1000)