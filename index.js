

let usuario = {

}


function enviar(){
let nome = document.getElementById('nome').value
let peso = document.getElementById(Number('peso')).value
let altura = document.getElementById(Number('altura')).value


usuario.nome = nome
usuario.peso = peso
usuario.altura = altura

console.log(usuario)

let imc = peso/altura

console.log(`seu imc é ${imc}`)

}
