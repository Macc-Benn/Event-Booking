    document.getElementById('closePopupButton').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
});
        
const clickBtn = (event) => {
    event.preventDefault(); // Prevent form submission on button click
    const name = document.forms['submission']['name'].value
    const email = document.forms['submission']['email'].value

    if(name === "" || email === "" ){ 
        return alert("Please fill in all fields");
    }
    
    document.getElementById('popup').classList.remove('hidden');
}

document.getElementById('payment-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var paymentType = document.getElementById('payment-type').value;
  
  if (paymentType === '') {
    alert('Please select a payment type.');
  } else {
    var paymentUrl = '';
    
    switch (paymentType) {
      case 'paystack':
        paymentUrl = './payments/paystack/paystack.html';
        break;
      case 'flutterwave':
        paymentUrl = './payments/flutterwave/flutterwave.html';
        break;
      case 'bank-transfer':
        paymentUrl = './payments/bank-transfer/bank-transfer.html';
        break;
      case 'online-payment':
        paymentUrl = './payments/online/online-payment.html';
        break;
    }

    // Store the return URL with a query parameter indicating successful payment
    window.location.href = paymentUrl + '?returnUrl=' + encodeURIComponent(window.location.href + '?paymentSuccess=true');
  }
});

// Check for payment success message in URL
window.onload = function() {
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('paymentSuccess') === 'true') {
    alert('Payment Successful');
    window.location.href = '../eventdetails/event-details.html'; // Redirect to home page
  }
};



// Set the date we're counting down to
var countDownDate = new Date("Aug 31, 2024 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the elements with id="days", "hours", "minutes", "seconds"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      

    }
}, 1000);