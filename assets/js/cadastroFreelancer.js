

let nome = document.getElementById("nome");
let email = document.getElementById("email");
let senha = document.getElementById("senha");
let pais = document.getElementById("pais");

let btn_criar_conta = document.getElementById("btn-criar-conta");





function createAccount() {

    const userRecuperado = localStorage.getItem('user');

    // Converter a string JSON de volta para um objeto
    const newUser = JSON.parse(userRecuperado);

    newUser.nome = nome.value;
    newUser.email = email.value;
    newUser.senha = senha.value;
    newUser.pais = pais.value;

    console.log(newUser);
    // Converter o objeto em uma string JSON
    let user = JSON.stringify(newUser);
    console.log(user);
    
    // Salvar a string JSON no Local Storage
    localStorage.setItem('user', user);


}





btn_criar_conta.addEventListener('click', (evt) => {

    evt.preventDefault();
    createAccount();
    window.location.href = "formulario-freelancer.html"


});











































// validate: {
//     validator: function (v) {
//         return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[^\da-zA-Z]).{8,}$/.test(v);
//     },
//     message: 'A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número, um caractere especial e um caractere não alfanumérico'
// }



// match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, informe um endereço de e-mail válido']


