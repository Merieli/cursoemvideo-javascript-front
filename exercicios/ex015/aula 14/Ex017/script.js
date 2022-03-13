function gerar() {
    var n = document.getElementById('tab')
    var res = document.getElementById('seltab')
    res.innerHTML = ''
    var ct = 0
    if (n.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else { 
        n = Number(n.value)
        res.innerHTML = '' 
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option') //criando elemento opção para o selection
            ct = n * c
            item.text = `${n} x ${c} = ${ct}`
            item.value = `tab${c}` //atribui a propriedade value de cada option criada o valor de tab+contador, não é util para javaScript mas em outras linguagens é preciso existir essa linha
            res.appendChild(item)
        }
    }       
}