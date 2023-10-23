let changeForms = document.querySelectorAll('.login-signup__container .change__form');
let containerLoginSignup = document.querySelector('.login-signup__container');
let forgotPassword = document.querySelector('.forgot__pass');
let overlayForgot = document.querySelector('.overlay');
let cancelOverlay = document.querySelector('.no__action');

changeForms.forEach((changeForm) => {
    changeForm.addEventListener('click', () => {
        containerLoginSignup.classList.toggle('left__active');
    })
})

forgotPassword.addEventListener('click', () => {
    overlayForgot.classList.add('show');
});

cancelOverlay.addEventListener('click', () => {
    overlayForgot.classList.remove('show');
});