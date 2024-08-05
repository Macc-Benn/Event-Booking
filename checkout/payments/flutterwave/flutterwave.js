 document.getElementById("flutterwave-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var urlParams = new URLSearchParams(window.location.search);
    var returnUrl = urlParams.get("returnUrl");

    // Simulate payment success
    setTimeout(function () {
    window.location.href = returnUrl;
    }, 3000);
    
    alert('Payment Successful') // Simulating a delay for payment processing
});