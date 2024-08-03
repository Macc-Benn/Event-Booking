        const clickBtn = (event) => {
            event.preventDefault(); // Prevent form submission on button click
            const password = document.forms['submission']['password'].value;
            const password1 = document.forms['submission']['password1'].value;
            
            if (password === "" || password1 === "") { 
                return alert("Please fill in all fields");

            }

            // console.log("Both fields are filled"); // Another debugging statement
            // Optionally, remove the action attribute to prevent the form from submitting to login.html
            // document.forms['submission'].action = ''; 
        }


        form.addEventListener('submit', function (e) {
  if (password.value !== password1.value) {
    e.preventDefault(); // Prevent form submission
    errorMessage.textContent = 'Passwords do not match!';
  }
});