
function tocaSom(seletorAudio) {
const elemento = document.querySelector(seletorAudio);


if (elemento != null && elemento.localName === 'audio') { 
    
    elemento.play()
}
else {
    console.log('Elemento não encontrado');
}
}
const listaDeTeclas = document.querySelectorAll ('.tecla');

/*

contador =0
//enquanto
while(contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
// template String
    const idAudio= `#som_${instrumento}`;


    tecla.onclick = function(){
        tocaSom(idAudio)
    };
contador = contador + 1 ;

}
*/


//outra forma de fazer
//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
// template String
    const idAudio= `#som_${instrumento}`;


    tecla.onclick = function(){
        tocaSom(idAudio)
    };

tecla.onkeydown = function (evento) {
    
    
    if (evento.code === 'Space'|| evento.code ==='Enter'){ 
    
    tecla.classList.add('ativa')};

}


tecla.onkeyup = function(){tecla.classList.remove('ativa');
}

}
