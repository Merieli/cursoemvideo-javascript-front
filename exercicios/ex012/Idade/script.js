function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    let exib = document.querySelector('div#res') //Pega na variavel exib o conteudo da div

    if (fano.value.length == 0 || Number(fano.value) > ano) { //Primeira validação que verifica se o ano está vazio ou se é maior que o ano atual
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //dentro variavel img foi criada uma tag HTML img
        img.setAttribute('id', 'foto') //para a variavel e tag img foi atribuido o id 'foto'
        if (fsex[0].checked) {//Se o que estiver marcado for a bolinha da posição 0 de fsex ou seja, sexo masculino
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './imagens/m-crianca.png')//atribuindo ao elemento criado de imagem o caminho src
            } else if (idade < 21) {
                img.setAttribute('src', './imagens/m-jovem.png')
            } else if (idade < 50){
                img.setAttribute('src', './imagens/m-adulto.png')
            } else {
                img.setAttribute('src','./imagens/m-velho.png')
            }        
        } else if (fsex[1].checked) {//Se o que estiver marcado for a bolinha da posição 1 de fsex ou seja, sexo feminino
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './imagens/f-menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', './imagens/f-jovem.png')
            } else if (idade < 50){
                img.setAttribute('src', './imagens/f-adulta.png')
            } else {
                img.setAttribute('src', './imagens/f-velha.png')
            }    
        }
        exib.style.textAlign = 'center'
        exib.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        exib.appendChild(img) //adiciona o elemento img
    }
}