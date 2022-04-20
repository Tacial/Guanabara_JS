function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22;
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BomDia
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora <= 18) {
        //BoaTarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //BoaNoite
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
    img.style.textAlign = 'center'
}
