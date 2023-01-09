const listaDeTeclas = document.querySelectorAll('.btn');

for (let cont = 0; cont < listaDeTeclas.length; cont++) {
    const tecla = listaDeTeclas[cont];
    const som = `#son_${tecla.classList[1]}`;
    const teclaNum = [`Numpad${cont}`, `Digit${cont}`];
    tecla.onclick = function() {
        tocaSons(som);
    }
    tecla.onkeydown = function (evento) {
        if (evento.code == 'Enter' || evento.code == 'Space' ) {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}

function tocaSons(selectorAudio) {
    const audio = document.querySelector(selectorAudio)
    if(audio && audio.localName == 'audio'){
        audio.play();
    }else{
        console.log('Elemento não encotrado!!');
    }
}
