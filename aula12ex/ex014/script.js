
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agoras são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#ffe89f'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#f18d35'
    } else {
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#003f9b'
    }
}