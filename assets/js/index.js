

const btn_cadastrar_freelancer = document.getElementById("btn-cadastrar-freelancer");
const btn_contratar_freelancer = document.getElementById("btn-contratar-freelancer");
const btn_login = document.getElementById("btn-login");


let newUser = {}





btn_cadastrar_freelancer.addEventListener('click', (evt) => {


    newUser.perfil = "Freelancer";
    saveLocalStorage(newUser);
    window.location.href = "cadastroFreelancer.html";

});

btn_contratar_freelancer.addEventListener('click', (evt) => {

    newUser.perfil = "Empresa";
    saveLocalStorage(newUser);
    window.location.href = "formulario-empresas.html";

});


btn_login.addEventListener('click', (evt) => {

    evt.preventDefault();
    window.location.href = "login.html";

});



function saveLocalStorage(newUser) {
    let user = JSON.stringify(newUser);
    console.log(user);
    localStorage.setItem('user', user);

}