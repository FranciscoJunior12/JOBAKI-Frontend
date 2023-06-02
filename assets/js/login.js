
const url = 'http://localhost:5500/users/login';

const btnLogin = document.querySelector('#btn-login');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#senha');
const form = document.querySelector('form');

const login = async (email, senha) => {

    try {
        const user = { email, senha }
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        console.log(response.ok);
        if (response.ok) {
            const data = await response.json();
            const { user, token } = data
            return { user, token }
        } else {
            throw new Error('Erro ao fazer login.');
        }
    } catch (error) {
        console.error(`Ocorreu um erro: ${error}`);
        throw error
    }
}

const handleLogin = async () => {
    const email = emailInput.value
    const senha = passwordInput.value

    try {
        const { user, token } = await login(email, senha)

        localStorage.setItem('usuarioActual', JSON.stringify(user));
        localStorage.setItem('token', token);
        console.log(localStorage.getItem('user'));

        //Redirecionamento para a tela principal
        return window.location.replace('home.html');

    } catch (error) {
        console.error('Erro durante o login:', error)
        emailInput.style.borderColor = 'red'
        passwordInput.style.borderColor = 'red'
    }
}

btnLogin.addEventListener('click', async (event) => {
    event.preventDefault();
    await handleLogin();
});


emailInput.addEventListener('click', () => {
    emailInput.style.borderColor = '#007bff';
});

passwordInput.addEventListener('click', () => {
    passwordInput.style.borderColor = '#007bff';
});




