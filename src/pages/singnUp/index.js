import { onNavigate } from '../../utils/history.js';

export const SignUp = () => {
  const rootElement = document.createElement('div');
  rootElement.setAttribute('class', 'box');
  rootElement.innerHTML = `
  <div class='box-item'>
  <h1><img src='../../img/logo.png' alt='Logo Type' class='logos-home'></h1>
  <img src='../../img/pessoas.png' alt='Logo Pessoas' class='logos-home'>

</div>

  <div class='box-item'>
    <h3>CRIAR UMA NOVA CONTA</h3>
    <form method='post'>
      <input type="text" placeholder="Insira seu nome" id="username" class='login-area'>
      <input type="email" placeholder="Insira um email" id="register-email" class="login-area">
      <input type="password" placeholder="Insira uma senha" id="register-password" class="login-area">
      <div class="error-message" id="singup-error">
      </div>
      <button class="btn button-area" id="button-register">Cadastre-se</button>
    </form>
</div>

`;

  const emailButton = rootElement.querySelector('#register-email');
  const passwordButton = rootElement.querySelector('#register-password');
  const username = rootElement.querySelector('#username');
  const registerButton = rootElement.querySelector('#button-register');

  registerButton.addEventListener('click', (event) => {
    firebase.auth().createUserWithEmailAndPassword(emailButton.value, passwordButton.value,
      username.value);
    event.preventDefault();
    onNavigate('/generalFeed');
  });

  return rootElement;
};
