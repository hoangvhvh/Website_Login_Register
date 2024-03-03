const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

document.addEventListener("DOMContentLoaded", function() {
    const registerLink = document.querySelector(".register-link");
    const loginLink = document.querySelector(".login-link");
    const closeIcon = document.getElementById("closeIcon");
    const loginForm = document.querySelector(".form-box.login");
    const registerForm = document.querySelector(".form-box.register");

    registerLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });
    
    closeIcon.addEventListener("click", function() {
        loginForm.style.display = "none";
        registerForm.style.display = "none";
    });
});

function showLoginForm() {
    var loginForm = document.querySelector(".form-box.login");
    loginForm.style.display = "block";
}
function hideForm() {
    var formBox = document.querySelector(".form-box.active");
    formBox.style.display = "none";
}