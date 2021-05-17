//variáveis
var pessoa = "pessoa";
var maquina = "maquina";

var pessoaDado1 = 0;
var pessoaDado2 = 0;
var maquinaDado1 = 0;
var maquinaDado2 = 0;

var somaPessoa = 0;
var somaMaquina = 0;

//função para gerar o número das faces dos dados
function gerarFacesAleatorias(minimo, maximo) {
    minimo = Math.ceil(minimo);
    maximo = Math.floor(maximo);
    return Math.floor(Math.random() * (maximo - minimo)) + minimo;
}

//função de soma
function somaFaces(face1, face2){
    return face1 + face2;
}

//gerar as faces aleatórias do usuário e somar as mesmas
pessoaDado1 = gerarFacesAleatorias(1, 6);
pessoaDado2 = gerarFacesAleatorias(1, 6);
var somaPessoa = somaFaces(pessoaDado1, pessoaDado2);

//gerar as faces aleatórias do usuário e somar as mesmas
maquinaDado1 = gerarFacesAleatorias(1, 6);
maquinaDado2 = gerarFacesAleatorias(1, 6);
var somaMaquina = somaFaces(maquinaDado1, maquinaDado2);

function gerarImagemFaces(face){
    switch(face){
        case 1:
            document.write("<img src=\"faces_dados/face_nUm.png>");
            break;
        case 2:
            document.write("<img src=\"faces_dados/face_nDois.png>");
            break;
        case 3:
            document.write("<img src=\"faces_dados/face_nTres.png>");
            break;
        case 4:
            document.write("<img src=\"faces_dados/face_nQuatro.png>");
            break;
        case 5:
            document.write("<img src=\"faces_dados/face_nCinco.png>");
            break;
        case 6:
            document.write("<img src=\"faces_dados/face_nSeis.png>");
            break;   
    }
}

//função que retorna o vencedor
function ganhador(somaPessoa, somaMaquina){
    switch(true){
        case somaPessoa > somaMaquina:
            return "Parabéns você ganhou!";
            break;
        case somaMaquina > somaPessoa: 
            return "Você perdeu!";
            break;
        case somaPessoa == somaMaquina: 
            return "A soma das faces foram iguais, você empatou!";
            break;
    }
}


