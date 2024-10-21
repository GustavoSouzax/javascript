var idade = 21
if (idade < 16) {
    console.log(idade + ' anos, Não pode votar')
} else if (idade < 18) {
    console.log(idade + ' anos, Pode votar, não obrigatório')
} else if (idade < 65) {
    console.log(idade + ' anos, Voto obrigatório')
} else {
    console.log(idade + ' anos, Voto opcional')
}