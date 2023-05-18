const signUpButton = document.getElementById('SignUp');
const signInButton = document.getElementById('SignIn');
const main = document.getElementById('main');

signUpButton.addEventListener('click', () =>{
    main.classList.add('right-panel-active');
})

signInButton.addEventListener('click', () =>{
    main.classList.remove('right-panel-active');
})

function WhiteMode() {
    let body = document.body;
    body.classList.toggle("white-mode");
  }
  
  let whiteMode = document.getElementById("whiteMode");
  whiteMode.addEventListener("click", WhiteMode);
  

const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
  event.preventDefault(); 

 
  const firstName = document.querySelector('input[name="txt"]').value;
  const lastName = document.querySelectorAll('input[name="txt"]')[1].value;
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="pswd"]').value;
  const confirmPassword = document.querySelectorAll('input[name="pswd"]')[1].value;


  if (firstName.length < 5 || lastName.length < 5 || email.length < 5 || password.length < 5) {
    alert('Os campos devem ter no minimo 5 caracteres.');
    return;
  }

  
  if (password !== confirmPassword) {
    alert('A senha e a confirmação de senha não correspondem.');
    return;
  }


  const userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  };


  console.log(userData);

  
  alert('Criação de login realizada com sucesso!');

const storedEmail = email;
const storedPassword = password;

const loginForm = document.querySelector('.sign-up form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const emailInput = document.querySelector('.sign-up input[name="email"]');
  const passwordInput = document.querySelector('.sign-up input[name="pswd"]');
  const enteredEmail = emailInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredEmail === storedEmail && enteredPassword === storedPassword) {

    alert('Login realizado com sucesso!');

    window.location.href = "./src/pages/criar.html";

  } else {
    alert('Email ou senha inválidos. Tente novamente.');
    emailInput.value = '';
    passwordInput.value = '';
  }
});
});
