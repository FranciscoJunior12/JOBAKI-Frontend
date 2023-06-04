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


const userRecuperado = localStorage.getItem('usuarioActual');
console.log(userRecuperado)
const user = JSON.parse(userRecuperado);
console.log(user._id)

function renderizarPost(projectos) {

  const container = document.querySelector('.row')
  container.innerHTML = "";

  projectos.forEach(projecto => {



    if (projecto.empresaId === user._id) {


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

    }

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