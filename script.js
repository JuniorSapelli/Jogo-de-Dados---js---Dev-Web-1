//variáveis
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
            document.write("<img src=\"faces_dado/face_nUm.png>");
            break;
        case 2:
            document.write("<img src=\"faces_dado/face_nDois.png>");
            break;
        case 3:
            document.write("<img src=\"faces_dado/face_nTres.png>");
            break;
        case 4:
            document.write("<img src=\"faces_dado/face_nQuatro.png>");
            break;
        case 5:
            document.write("<img src=\"faces_dado/face_nCinco.png>");
            break;
        case 6:
            document.write("<img src=\"faces_dado/face_nSeis.png>");
            break;   
    }
}

//função que gera as informações da pessoa na tela
function gerarPessoa(pessoaDado1, pessoaDado2, somaPessoa){
    document.write("Seus dados foram:");
    document.write('<br>');
    document.write("Face 1: ");
    gerarImagemFaces(pessoaDado1);
    document.write('<br>');
    document.write("Face 2: ");
    gerarImagemFaces(pessoaDado2);
    document.write('<br>');
    document.write("Soma das faces: " + somaPessoa);
    document.write('<br>');
}

//função que gera as informações da pessoa na tela
function gerarMaquina(maquinaDado1, maquinaDado2, somaMaquina){
    document.write("Seus dados foram:");
    document.write('<br>');
    document.write("Face 1: ");
    gerarImagemFaces(maquinaDado1);
    document.write('<br>');
    document.write("Face 2: ");
    gerarImagemFaces(maquinaDado2);
    document.write('<br>');
    document.write("Soma das faces: " + somaMaquina);
    document.write('<br>');
}

//função que retorna o vencedor
function ganhador(somaPessoa, somaMaquina){
    switch(true){
        case somaPessoa > somaMaquina:
            document.write("Parabéns você ganhou!");
        case somaMaquina > somaPessoa: 
            document.write("Você perdeu!");
        case somaPessoa == somaMaquina: 
            document.write("A soma das faces foram iguais, você empatou!");
    }
}

//chamada das funções
gerarPessoa(pessoaDado1, pessoaDado2, somaPessoa);
gerarMaquina(maquinaDado1, maquinaDado2, somaMaquina);
ganhador(somaPessoa, somaMaquina);




