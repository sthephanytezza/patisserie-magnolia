import imagemm1 from '../assets/imagem1.jpg';
import imagemm2 from '../assets/imagem2.jpg';
import imagemm3 from '../assets/imagem3.jpg';

var array = [];

export default () => 

        array = [{imagemm1}, {imagemm2}, {imagemm3}];

        function slide(pos) {
            document.getElementById('imgId').src = array[pos];
            selecionaQuadrado(pos);
            if(pos == 2) 
                setTimeout(`slide${pos - 1}`, 3000);
            else 
                setTimeout(`slide${pos + 2}`, 3000);
        }

        function imagem1(){
            document.getElementById('imgId').src = array[0]
            selecionaQuadrado(0)
            setTimeout(5000)
        }

        function imagem2(){
            document.getElementById('imgId').src = array[1]
            selecionaQuadrado(1)
            setTimeout(5000)
        }

        function imagem3(){
            document.getElementById('imgId').src = array[2]
            selecionaQuadrado(2)
            setTimeout(5000)
        }

        function selecionaQuadrado(posicao){
            if(posicao == 0){
                document.getElementById('imagem1').className = 'quadrado selecionado'
                document.getElementById('imagem2').className = 'quadrado'
                document.getElementById('imagem3').className = 'quadrado'
            } else if(posicao == 1){
                document.getElementById('imagem1').className = 'quadrado'
                document.getElementById('imagem2').className = 'quadrado selecionado'
                document.getElementById('imagem3').className = 'quadrado'
            } else if(posicao == 2){
                document.getElementById('imagem1').className = 'quadrado'
                document.getElementById('imagem2').className = 'quadrado'
                document.getElementById('imagem3').className = 'quadrado selecionado'
            }
        }
    