let livros = JSON.parse(localStorage.getItem('livros')) || []

function saveBooks(){
    localStorage.setItem('livros', JSON.stringify(livros))
}

function addBook(){
    const titulo = document.getElementById('titulo')
    const autor = document.getElementById('autor')
    const genero = document.getElementById('genero')
    const ano = document.getElementById('ano')

    const book = {
        titulo: titulo.value ,
        autor: autor.value,
        genero: genero.value,
        ano: Number(ano.value)
    }

    livros.push(book)

    saveBooks()

    

}
function listarLivros(arrayLivros){
        const catalogo = document.querySelector('#catalogo')
        catalogo.innerHTML = ''

        for (const livro of arrayLivros){
            const div = document.createElement('div')
            div.classList.add('book')
            div.innerHTML = `<h3>Titulo: ${livro.titulo}</h3>
            <p>Autor: ${livro.autor}</p>
            <p>Genero: ${livro.genero}</p>
            <p>Ano: ${livro.ano}</p>`

            catalogo.append(div)
        }
        

    }
    

function searchBook(){
    const termo = document.getElementById('termo').value
    const resultados = livros.filter((book) => {

        return book.autor === termo || book.titulo === termo || book.genero === termo 
        
    })
    listarLivros(resultados)
}


// listarLivros(livros)