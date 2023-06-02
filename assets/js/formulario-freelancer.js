const url = "http://localhost:5500/users/cadastrar"



let btn_guardar = document.getElementById("btn-guardar");


let area_actuacao = document.getElementById("area_actuacao");
let provincia = document.getElementById("provincia");
let anos_experiencia = document.getElementById("Ano_experiencia");
let experiencia = document.getElementById("experiencia");
let sobre = document.getElementById("sobre");
let portfolio = document.getElementById("portifolio");
let tecnologia = document.getElementById("tecnologia");
let github = document.getElementById("Github");
let linkendin = document.getElementById("Linkedin");
let instagram = document.getElementById("instagram");


btn_guardar.addEventListener('click', (evt) => {
    evt.preventDefault();
    save();

});



function save() {
    
    const userRecuperado = localStorage.getItem('user');
    const user = JSON.parse(userRecuperado);

    user.area_actuacao = area_actuacao.value;
    user.sobre = sobre.ariaValueMax;
    user.tecnologias = tecnologia.value,
    user.experiencia = experiencia.value;
    user.ano_experiencia = anos_experiencia.parseI,
    user.provincia = provincia.value,
    user.linkedin = linkendin.value,
    user.github = github.value,
    user.portifolio = portfolio.value,
    user.instagram = instagram.value,

        window.location.replace("home.html");

    axios.post(url, user)
        .then(response => {
            location.replace = "home.html"
        })
        .catch(error => {
            console.log(error);
        });

}


