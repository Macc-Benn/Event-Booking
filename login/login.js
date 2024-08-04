const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('bi-eye');
});

function validateForm() {
  const email = document.forms['submission']['email'].value;
  const password = document.forms['submission']['password'].value;

  if (email === "" || password === "") {
    alert("Please fill in all fields");
    return false; // Prevent form submission
  }

  alert("Logged in");
  
  return true; // Allow form submission
}       