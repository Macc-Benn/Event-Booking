const ticketPrices = [200000, 150000, 5000]; // Prices for each ticket option

// Increment function
const increment = (id) => {
    const ticketInput = document.getElementById(`ticketValue${id}`);
    let ticketValue = Number(ticketInput.value);
    const available = Number(document.getElementById(`available${id}`).innerText);
    const amountElement = document.getElementById(`amount${id}`);
    let amount = Number(amountElement.innerText.replace(/[A-Z]/gi, ""));

    // Prevent going over available tickets
    if (available <= 0) {
        alert("Ticket exhausted");
        return;
    }

    ticketValue += 1;
    amount += ticketPrices[id - 1];
    
    ticketInput.value = ticketValue;
    document.getElementById(`available${id}`).innerText = available - 1;
    amountElement.innerText = `N${amount}`;
};

// Decrement function
const decrement = (id) => {
    const ticketInput = document.getElementById(`ticketValue${id}`);
    let ticketValue = Number(ticketInput.value);
    const availableElement = document.getElementById(`available${id}`);
    const available = Number(availableElement.innerText);
    const amountElement = document.getElementById(`amount${id}`);
    let amount = Number(amountElement.innerText.replace(/[A-Z]/gi, ""));

    // Prevent going below zero tickets
    if (ticketValue <= 0) return;

    ticketValue -= 1;
    amount -= ticketPrices[id - 1];
    
    ticketInput.value = ticketValue;
    availableElement.innerText = available + 1;
    amountElement.innerText = `N${amount}`;
};

// Update values based on manual input
const updateFromInput = (id) => {
    const ticketInput = document.getElementById(`ticketValue${id}`);
    let ticketValue = Number(ticketInput.value);
    const availableElement = document.getElementById(`available${id}`);
    const available = Number(availableElement.innerText);
    const amountElement = document.getElementById(`amount${id}`);
    let amount = Number(amountElement.innerText.replace(/[A-Z]/gi, ""));

    // Validate ticket input
    if (ticketValue < 0) {
        alert("Cannot purchase less than 0 tickets.");
        ticketValue = 0;
    }

    // Ensure the number of tickets does not exceed availability
    if (ticketValue > (100 - available)) {
        alert("Not enough tickets available.");
        ticketValue = 100 - available; // Restore to the maximum available tickets
    }

    availableElement.innerText = available + (amount / ticketPrices[id - 1]) - ticketValue;
    amount = ticketValue * ticketPrices[id - 1];
    amountElement.innerText = `N${amount}`;
};

// Function to restrict input to numbers only
const restrictInput = (event) => {
    if (!/[0-9]/.test(event.key) && event.key !== "Backspace") {
        event.preventDefault();
    }
};