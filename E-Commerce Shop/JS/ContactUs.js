const form = document.querySelector('.ContactUs-Form');
const nameInput = form.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const nameError = form.querySelector('#nameError');
const emailError = form.querySelector('#emailError');
const messageError = form.querySelector('#messageError');
const submitBtn = form.querySelector('#submitBtn');
const submitSuccessSpan = form.querySelector('#submitSuccessSpan');

submitBtn.addEventListener('click', (event) => {
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        event.preventDefault();
    } else {
        nameError.style.display = 'none';
    }

    if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
        emailError.style.display = 'block';
        event.preventDefault();
    } else {
        emailError.style.display = 'none';
    }

    if (messageInput.value.trim() === '') {
        messageError.style.display = 'block';
        event.preventDefault();
    } else {
        messageError.style.display = 'none';
    }

});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}