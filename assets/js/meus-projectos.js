let titulo_projecto = document.getElementById("titulo-projecto-meus-projectos");

let descricao_projecto = document.getElementById("descricao-projecto-meus-projectos");

let tecnologias_projecto = document.getElementById("tecnologias-meus-projectos");

let proposta_pagnto_projecto = document.getElementById("proposta-pagto-meus-projectos");

let disponibilidade_projecto = document.getElementById("disponibilidade-meus-projectos");

let anos_experiencia_projecto = document.getElementById("anos-experiencia-meus-projectos");

let duracao_projecto = document.getElementById("duracao-projecto-meus-projectos");


function setarCamposMeusProjectos() {

    titulo_projecto.innerHTML = projecto.titulo
    descricao_projecto.innerHTML = projecto.descricao;
    tecnologias_projecto.innerHTML = projecto.tecnologias;
    proposta_pagnto_projecto.innerHTML = projecto.proposta_pagamento;
    disponibilidade_projecto.innerHTML = projecto.disponibilidade;
    anos_experiencia_projecto.innerHTML = projecto.anos_experiencia;
    duracao_projecto.innerHTML = projecto.duracao;
    
}

