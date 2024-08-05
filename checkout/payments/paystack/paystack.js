 document.getElementById("paystack-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var urlParams = new URLSearchParams(window.location.search);
    var returnUrl = urlParams.get("returnUrl");

    // Simulate payment success
    setTimeout(function () {
    window.location.href = returnUrl;
    }, 1000); // Simulating a delay for payment processing
});