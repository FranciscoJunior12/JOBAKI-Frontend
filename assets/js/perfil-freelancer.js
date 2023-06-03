

//secco dropdown
let nome = document.getElementById("nome");
let nome_drop = document.getElementById("nome-dropdow");
let area_atuacao_drop = document.getElementById("area_actuacao_dropdow");

//seccao perfil-user
let nome_perfil_user = document.getElementById("nome-perfil-user");
let area_actuacao_perfil_user = document.getElementById("area-actuacao-perfil-user");
let linkedin_perfil_user = document.getElementById("linkedin-perfil-user");
let github_perfil_user = document.getElementById("github-perfil-user");
let portifolio_perfil_user = document.getElementById("portifolio-perfil-user");
let insta_perfil_user = document.getElementById("instagram-perfil-user");

//seccao visao geral
let nome_visao_geral = document.getElementById("nome-visao-geral");
let area_visao_geral = document.getElementById("area-actuacao-visao-geral");
let provincia_visao_geral = document.getElementById("Provincia-visao-geral");
let tecnologia_visao_geral = document.getElementById("tecnologia-visao-geral");
let email_visao_geral = document.getElementById("email-visao-geral");
let sobre_visao_geral = document.getElementById("sobre-visao-geral");
let experiencia_visao_geral = document.getElementById("experiencia-visao-geral");

//seccao editar
let nome_ditar = document.getElementById("nome-editar");
let actuacao_editar = document.getElementById("area-actuacao-editar");
let sobre_editar = document.getElementById("sobre-editar");
let tecnologia_editar = document.getElementById("tecnologias-editar");
let experiencia_editar = document.getElementById("experiencia-editar");
let Ano_experiencia_editar = document.getElementById("Ano_experiencia_editar");
let provincia_editar = document.getElementById("provincia-editar");
let linkedin_editar = document.getElementById("linkedin-editar");
let insta_editar = document.getElementById("Instagram-editar");
let portifolio_editar = document.getElementById("portifolio-editar");
let github_editar = document.getElementById("github-editar");


const btn_update = document.getElementById("guardar-alteracao")


const userRecuperado = localStorage.getItem('usuarioActual');
const token = localStorage.getItem('token');
console.log(userRecuperado, token)
const user = JSON.parse(userRecuperado);

async function renderizarDadosPerfil(user) {

    nome.innerHTML = user.nome;
    nome_drop.innerHTML = user.nome;
    nome_perfil_user.innerHTML = user.nome;
    nome_visao_geral.innerHTML = user.nome;
    area_actuacao_perfil_user.innerHTML = user.area_actuacao;
    area_visao_geral.innerHTML = user.area_actuacao;
    area_atuacao_drop.innerHTML = user.area_actuacao;
    sobre_visao_geral.innerHTML = user.sobre
    tecnologia_visao_geral.innerHTML = user.tecnologias
    experiencia_visao_geral.innerHTML = user.experiencia
    provincia_visao_geral.innerHTML = user.provincia
    email_visao_geral.innerHTML = user.email

    linkedin_perfil_user.href = `${user.linkedin}`;
    github_perfil_user.href = `${user.github}`;
    insta_perfil_user.href = `${user.instagram}`;
    portifolio_perfil_user.href = `${user.portifolio}`;


    nome_ditar.value = user.nome;
    actuacao_editar.value = user.area_actuacao;
    sobre_editar.value = user.sobre;
    tecnologia_editar.value = user.tecnologias;
    experiencia_editar.value = user.experiencia;

    linkedin_editar.value = user.linkedin;
    insta_editar.value = user.instagram;
    portifolio_editar.value = user.portifolio;
    github_editar.value = user.github;






}


renderizarDadosPerfil(user);




btn_update.addEventListener('click', (evt) => {
    evt.preventDefault();
    updateUser();

});

const id = user._id;

function updateUser() {

    const userUpdated = {}
    userUpdated.nome = nome_ditar.value;

    // userUpdated.senha = senha.value;
    userUpdated.area_actuacao = actuacao_editar.value
    userUpdated.sobre = sobre_editar.value
    userUpdated.tecnologias = tecnologia_editar.value
    userUpdated.experiencia = experiencia_editar.value;
    userUpdated.ano_experiencia = Ano_experiencia_editar.value;
    userUpdated.provincia = provincia_editar.value;
    userUpdated.linkedin = linkedin_editar.value
    userUpdated.github = github_editar.value
    userUpdated.portifolio = portifolio_editar.value
    userUpdated.instagram = insta_editar.value;
    userUpdated.instagram = insta_editar.value

    userUpdated._id = id;











    // localStorage.setItem('idUser', JSON.stringify(user_id));
    const url = `http://localhost:5500/users/${id}`;


    axios.put(url, userUpdated)
        .then(response => {
            localStorage.setItem('usuarioActual', JSON.stringify(userUpdated));

            renderizarDadosPerfil(userUpdated);
            // window.location.reload();

        })
        .catch(error => {
            console.log(error);
        });




}