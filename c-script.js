const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
const togglePassword1 = document.querySelector('#togglePassword1');
const password1 = document.querySelector('#password1');
const form = document.querySelector('#passwordForm');
const errorMessage = document.querySelector('#error-message');



togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('bi-eye');
});


togglePassword1.addEventListener('click', function () {
  // toggle the type attribute
  const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
  password1.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('bi-eye');
});

form.addEventListener('submit', function (e) {
  if (password.value !== password1.value) {
    e.preventDefault(); // Prevent form submission
    errorMessage.textContent = 'Passwords do not match!';
  }
});

