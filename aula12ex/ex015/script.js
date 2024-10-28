function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (!fano.value || fano.value < 1900 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
        return
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 3){
                // Bebê
                img.setAttribute('src', 'imagens/bebe-mas.png')
            } else if (idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/crianca-mas.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-mas.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-mas.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-mas.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 3){
                // Bebê
                img.setAttribute('src', 'imagens/bebe-fem.png')
            } else if (idade < 14) {
                // Criança
                img.setAttribute('src', 'imagens/crianca-fem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-fem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulta-fem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosa-fem.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}