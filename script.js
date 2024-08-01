    document.getElementById('closePopupButton').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
});
        
        const clickBtn = (event) => {
            event.preventDefault(); // Prevent form submission on button click
           const name = document.forms['submission']['name'].value
            const email = document.forms['submission']['email'].value

            if(name === "" || email === ""){
                return alert("Please fill in all fields");
            }
            
            document.getElementById('popup').classList.remove('hidden');
        }
        