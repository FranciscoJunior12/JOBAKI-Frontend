

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



function renderizarPost(projectos) {

    const container = document.querySelector('.row')
    container.innerHTML = "";

    projectos.forEach(projecto => {






        const post = document.createElement('div')
        post.classList.add('col-lg-6')



        post.innerHTML = `
    
            <div class="card">
              <div class="card-body">
        
                <div class="flex">
                  <h5 class="card-title"><a href="" style="color: #6358DC;" id="titulo-projecto-meus-projectos">${projecto.titulo}</a></h5>
                  <a href="#" class="btn-proposta">Editar Projecto</a>
                </div>
                <div>
                  
                  <p class="data-publicacao">
                    Publicado: há 14 horas
                  </p>
        
                  <p class="descricao-projecto-meus-projectos">
                 ${projecto.descricao}
                  </p>
                    <div id="tecnologias-meus-projectos">Tecnologias: ${projecto.tecnologias}</div>
                    <div id="proposta-pagto-meus-projectos" >Proposta de Pagamento: ${projecto.proposta_pagamento}</div>
                    <div id="disponibilidade-meus-projectos">Disponibilidade requerida: ${projecto.disponibilidade}</div>
                    <div id="anos-experiencia-meus-projectos">Anos de Experiência Requeridos: ${projecto.anos_experiencia}</div>
                    <div id="duracao-projecto-meus-projectos">Duração do Projecto: ${projecto.duracao}</div>
                </div>
              </div>
            </div>
        
            
            
            `;

        container.appendChild(post)



    });


}

function getProjectos() {
    const url = "http://localhost:5500/projectos"
    axios.get(url)
        .then(response => {

            if (response.status === 200) {

                const projectos = response.data;

                renderizarPost(projectos);
                console.log("tudo hallal");

            }
        })
        .catch(error => {

            console.log(error);

        });

}

getProjectos();
