var livro = {               //
    titulo: "JavaScript",
    disponivel: true,
};

var estoque = livro.disponivel

if (estoque == true) {
    estoque = 'sim'
} else {
    estoque = 'não'
}

console.log(`Título ${livro.titulo}` , `Disponível ${estoque}`)