const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const signupLink = document.querySelector('.signup-link');
const btnPop = document.querySelector('.btnlogin'); // Updated class selector
const iconClose = document.querySelector('.icon-close');

signupLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPop.addEventListener('click', () => {
    wrapper.classList.add('active-popup'); // Opens the modal
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup'); // Closes the modal
});