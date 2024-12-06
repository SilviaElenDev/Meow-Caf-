
class Scroll{

    constructor(seletorMenu,selectorOpcoes){
        this.menu = document.querySelector(seletorMenu);
        this.opcoes = document.querySelector(selectorOpcoes);
    }
    
    addEvent(){

        let ultimaPosicao = 0;
    
        window.addEventListener('scroll', () => {

            const posicaoAtual = window.scrollY;
            console.log(posicaoAtual)

            if(posicaoAtual == 0){
                this.menu.style.position ='static';
                this.menu.style.backgroundColor = '';

            }else if(posicaoAtual > ultimaPosicao){
                this.menu.style.position ='static';

            }else{
                this.menu.style.position ='fixed';
                this.menu.style.backgroundColor = '#F4DDD3';
                this.menu.style.width ='1188px';
                this.menu.style.zIndex ='1';

            }
            ultimaPosicao = posicaoAtual;
        
        },);
    }
}

const scroll = new Scroll('#menu','#opcoes')
scroll.addEvent()