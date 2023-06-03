const url = "http://localhost:5500/users/cadastrar"



const btn_guardar = document.getElementById("btn-guardar");

const endereco = document.getElementById("endereco");
const provincia = document.getElementById("provincia");
const site_empresa = document.getElementById("site-empresa");
const sobre_empresa = document.getElementById("sobre-empresa");
const nome_empresa = document.getElementById("nome-empresa");
const email_empresa = document.getElementById("email-empresa");


btn_guardar.addEventListener('click', (evt) => {
    evt.preventDefault();
    save();

});



function save() {

    const userRecuperado = localStorage.getItem('user');
    const user = JSON.parse(userRecuperado);


    user.endereco = endereco.value;
    user.provincia = provincia.value
    user.site_empresa = site_empresa.value
    user.sobre_empresa = sobre_empresa.value;
    user.nome_empresa = nome_empresa.value;
    user.email = email_empresa.value;




    axios.post(url, user)
        .then(response => {

            if (response.status === 201) {
                window.location.href = "home-page.html";
            }
        })
        .catch(error => {

            console.log(error);

        });

}



