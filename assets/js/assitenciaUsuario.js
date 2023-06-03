

const nome = document.getElementById('nome_drop');
const area_actuacao = document.getElementById('area_actuacao');
const nome_dropdown = document.getElementById('nome_dropdown');



const userRecuperado = localStorage.getItem('usuarioActual');
// const token = localStorage.getItem('token');
// console.log(userRecuperado, token)
const user = JSON.parse(userRecuperado);



nome.innerHTML = user.nome;
nome_dropdown.innerHTML = user.nome;
area_actuacao.innerHTML = user.area_actuacao;


