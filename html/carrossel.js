array1 = new Array ("../assets/imagem1.jpg", "../assets/imagem2.jpg", "../assets/imagem3.jpg")

function slide1(){ 
    document.getElementById('imgId').src= array1[0];
    selecionaQuadrado(0)
    setTimeout("slide2()", 3000)
}

function slide2(){
    document.getElementById('imgId').src= array1[1];
    selecionaQuadrado(1)
    setTimeout("slide3()", 3000)
}

function slide3(){
    document.getElementById('imgId').src= array1[2];
    selecionaQuadrado(2)
    setTimeout("slide1()", 3000)
}


function imagem1(){
    document.getElementById('imgId').src = array1[0]
    selecionaQuadrado(0)
    setTimeout(5000)
}

function imagem2(){
    document.getElementById('imgId').src = array1[1]
    selecionaQuadrado(1)
    setTimeout(5000)
}

function imagem3(){
    document.getElementById('imgId').src = array1[2]
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