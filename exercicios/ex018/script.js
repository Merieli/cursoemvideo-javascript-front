// variavel array para armazenar os numeros digitados
// Ao clicar em finalizar encontrar: o maior valor, o menor valor, a soma de todos valores, a media dos valores digitados

let num = document.getElementById('n')
let lista = document.querySelector('select#slista') //pegando o conteudo de select para ser substituido
let res = document.getElementById('res')
let vetorval = []

console.log(res)

function isFaixanum(n) { //outro nome de variavel que recebe o valor de num
    //n = Number(n)
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }   
}
//a chamada de inLista já está contecendo dento da function exibir

function exibir() {
    if(isFaixanum(num.value) && !inLista(num.value, vetorval)) {
        vetorval.push(Number(num.value))
        let opcao = document.createElement('option') //Criando a tag option dentro da variavel opcao
        opcao.text = `Valor ${num.value} foi adicionado`//atribuindo n a tag option
        lista.appendChild(opcao) //adicionando a tag option com o num digitado ao 
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function calcular(){
    if (vetorval.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = vetorval.length
        let maior = vetorval[0]
        let menor = vetorval[0]
        let soma = 0
        for (let pos in vetorval) {
            soma += vetorval[pos]
            if (vetorval[pos] > maior) {
                maior = vetorval[pos]
            }
            if (vetorval[pos] < menor) {
                menor = vetorval[pos]
            }
        }
        let media = soma / tot
        res.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}