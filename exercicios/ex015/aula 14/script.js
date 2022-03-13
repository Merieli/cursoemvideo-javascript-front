function contar() {
    var res = document.getElementById('res')
    var inic = document.querySelector('input#inicont')
    var fcon = document.getElementById('fcont')
    var pcon = document.getElementById('pcont')
    res.innerHTML = ''
    if (inic.value.length == 0 || fcon.value.length == 0 || pcon.value.length == 0) {
        res.innerHTML = `Impossível contar!`
    } else {
        inic = Number(inic.value)
        fcon = Number(fcon.value)
        pcon = Number(pcon.value)
        res.innerHTML = 'Contando:<br>'
        if (pcon <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            pcon = 1
        } 
        if (inic > fcon && pcon >= 1){
            while (inic >= fcon) {
                res.innerHTML += `${inic} \u{1f449}`       
                inic -= pcon
            }
            res.innerHTML += `&#x1F3C1`
        } else if (fcon > inic && pcon >= 1) {
            while (inic <= fcon) {
                res.innerHTML += `${inic} \u{1f449}`       
                inic += pcon
            }
            res.innerHTML += '\u{1F3C1}'
        }
    }
}
    