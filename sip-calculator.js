// Function to format numbers in the Indian number format (e.g., 1,10,00,000)
function formatIndianCurrency(number) {
    // Convert the number to a string
    let numStr = number.toFixed(2); // Round to two decimals
    let [integerPart, decimalPart] = numStr.split('.'); // Separate integer and decimal parts

    // Add commas for Indian format (separate the last three digits, then groups of two)
    let result = '';
    let count = 0;
    // Reverse the integer part to start placing commas from the right
    for (let i = integerPart.length - 1; i >= 0; i--) {
        result = integerPart[i] + result;
        count++;
        // After every 2 digits (except the first 3), add a comma
        if (count % 2 === 0 && count !== integerPart.length) {
            result = ',' + result;
        }
    }

    // Combine the formatted integer part with the decimal part
    return result + '.' + decimalPart;
}

// Function to calculate SIP
document.getElementById("calculateBtn").addEventListener("click", function() {
    var amount = parseFloat(document.getElementById("amount").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    // Validate input
    if (isNaN(amount) || isNaN(rate) || isNaN(time) || amount <= 0 || rate <= 0 || time <= 0) {
        alert("Please enter valid values for all fields.");
        return;
    }

    // SIP Formula to calculate future value (FV)
    var n = time * 12; // Convert years to months
    var r = rate / 100 / 12; // Monthly interest rate

    // SIP Future Value formula: FV = P * ((1 + r)^n - 1) / r * (1 + r)
    var futureValue = amount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

    // Total investment
    var totalInvestment = amount * n;

    // Format the results and round to 2 decimal places for future value
    document.getElementById("investmentAmount").textContent = "₹ " + formatIndianCurrency(totalInvestment);
    document.getElementById("futureValue").textContent = "₹ " + formatIndianCurrency(futureValue);
});
