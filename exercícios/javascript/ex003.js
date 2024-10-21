let agora = new Date()
const data = {
    hora: agora.getHours(),
    minutos: agora.getMinutes(),
};

//data.hora = 16;

if (data.hora < 4) {
    console.log(`São ${data.hora}:${data.minutos}. Tenha uma boa madrugada!`)
} else if (data.hora < 12) {
    console.log(`São ${data.hora}:${data.minutos}. Bom dia!`)
} else if (data.hora < 18) {
    console.log(`São ${data.hora}:${data.minutos}. Boa tarde!`)
} else {
    console.log(`São ${data.hora}:${data.minutos}. Boa noite!`)
};
