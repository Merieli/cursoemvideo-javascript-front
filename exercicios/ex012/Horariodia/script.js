function carregar() {
    var data = new Date() //pega a data completa no momento
    var hora = data.getHours() //pega o horario
    //var hora = 07 //verificador de funcionamento
    var exib = document.getElementById('hr') //a variavel exib recebe o conteudo da div de id=hr
    exib.innerHTML = `Agora são ${hora} horas.`
    var foto = document.getElementById('foto')  //a variavel foto recebe o conteudo da div de class = img
    if (hora >= 0 && hora < 12) {
        foto.innerHTML = `Agora é manhã.`
        foto.src = './imagens/manha.png'
        document.body.style.background = '#efd2c4'
    } else if (hora >= 12 && hora <= 18) {
        foto.innerHTML = `Agora é tarde.`
        foto.src = './imagens/tarde.png'
        document.body.style.background = '#f1d195'
    } else {
        foto.innerHTML = `Agora é noite.`
        foto.src = './imagens/noite.png'
        document.body.style.background = '#01334c'
    }
}
