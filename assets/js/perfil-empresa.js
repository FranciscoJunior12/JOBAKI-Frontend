

//secco dropdown
let nome = document.getElementById("nome");
let nome_drop = document.getElementById("nome-dropdown");


let nome_perfil_user = document.getElementById("nome-empresa-perfil");

//seccao visao geral
let nome_visao_geral = document.getElementById("nome-empresa");

let provincia_visao_geral = document.getElementById("provincia-empresa-visao-geral");
let site_visao_geral = document.getElementById("site-visao-geral");
let email_visao_geral = document.getElementById("email-empresa-visao-geral");
let sobre_visao_geral = document.getElementById("sobre-empresa");
let endereco_visao_geral = document.getElementById("endereco-empresa-visao-geral");


//seccao editar
let nome_ditar = document.getElementById("nome-empresa-editar-perfil");
let sobre_editar = document.getElementById("sobre-empresa-editar-perfil");
let site_editar = document.getElementById("site-editar-perfil");
let provincia_editar = document.getElementById("provincia-empresa-editar-perfil");
let email_editar = document.getElementById("email-empresa-editar-perfil");
let endereco_editar = document.getElementById("endereco-empresa-editar-perfil");
const btn_update = document.getElementById("guardar-alteracao");


const userRecuperado = localStorage.getItem('usuarioActual');
const token = localStorage.getItem('token');
console.log(userRecuperado, token)
const user = JSON.parse(userRecuperado);

async function renderizarDadosPerfil(user) {

    nome.innerHTML = user.nome_empresa;
    nome_drop.innerHTML = user.nome_empresa;
    nome_perfil_user.innerHTML = user.nome_empresa;
    nome_visao_geral.innerHTML = user.nome_empresa;

    sobre_visao_geral.innerHTML = user.sobre_empresa
    site_visao_geral.innerHTML = user.site_empresa

    provincia_visao_geral.innerHTML = user.provincia;
    endereco_visao_geral.innerHTML = user.endereco;
    email_visao_geral.innerHTML = user.email


    nome_ditar.value = user.nome_empresa;
    sobre_editar.value = user.sobre_empresa;
    site_editar.value = user.site_empresa;
    endereco_editar.value = user.endereco;
    email_editar.value = user.email;

}


renderizarDadosPerfil(user);


btn_update.addEventListener('click', (evt) => {
    evt.preventDefault();
    updateUser();

});

const id = user._id;

function updateUser() {

    const userUpdated = {}
    userUpdated.nome_empresa = nome_ditar.value;


    userUpdated.sobre_empresa = sobre_editar.value
    userUpdated.email = email_editar.value
    userUpdated.site_empresa = site_editar.value;
    
    userUpdated.provincia = provincia_editar.value;
    userUpdated.endereco= endereco_editar.value
   
    userUpdated._id = id;

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