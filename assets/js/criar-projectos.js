let titulo_projecto = document.getElementById("titulo-do-projecto-criar-projecto");

let descricao_projecto = document.getElementById("descricao-projecto-criar-projecto");

let tecnologias_projecto = document.getElementById("tecnologias-criar-projecto");

let proposta_pagnto_projecto = document.getElementById("proposta-pagto-criar-projecto");

let disponibilidade_projecto = document.getElementById("disponibilidade-criar-projecto");

let anos_experiencia_projecto = document.getElementById("anos-experiencia-criar-projecto");

let duracao_projecto = document.getElementById("duracao-projecto-criar-projecto");

let btn_criar = document.getElementById("btn-criar-projecto");

const url = "http://localhost:5500/projectos/cadastrar";


const userRecuperado = localStorage.getItem('usuarioActual');
// const token = localStorage.getItem('token');
// console.log(userRecuperado, token)
const user = JSON.parse(userRecuperado);





function criarProjecto() {

    const Projecto = {}
    Projecto.empresaId = user._id;
    Projecto.titulo = titulo_projecto.value;
    Projecto.descricao = descricao_projecto.value;
    Projecto.tecnologias = tecnologias_projecto.value;
    Projecto.proposta_pagamento = proposta_pagnto_projecto.value;
    Projecto.disponibilidade = disponibilidade_projecto.value;
    Projecto.anos_experiencia = anos_experiencia_projecto.value;
    Projecto.duracao = duracao_projecto.value;

    axios.post(url, Projecto)
        .then(response => {


            console.log(response.data);
            window.location.reload();

        })
        .catch(error => {
            console.log(error);
        });


}

btn_criar.addEventListener('click', (evt) => {
    evt.preventDefault();
    criarProjecto();
})

