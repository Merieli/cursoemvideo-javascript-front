function verificar() {
    let sexomasc = document.getElementById('masc') //Obtem valor true ou false
    let sexofem = document.getElementById('fem') //Obtem valor true ou false
    let exib = document.querySelector('div.res') //Variavel exib recebe o conteúdo da div res para ser substituido e mostrar o resultado
    if (sexomasc = 'true') {
        exib.innerHTML = 'É um homem'
    } else if (sexofem = 'true') {
        exib.innerHTML = 'É uma mulher'
    }
}