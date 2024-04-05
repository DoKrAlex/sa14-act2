function convert() {
    const sourceCurrency = document.getElementById('sourceCurrency').value;
    const targetCurrency = document.getElementById('targetCurrency').value;
    const amount = document.getElementById('amount').value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${sourceCurrency}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[targetCurrency];
            const convertedAmount = amount * exchangeRate;
            document.getElementById('result').innerHTML = `${amount} ${sourceCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency} (1 ${sourceCurrency} = ${exchangeRate.toFixed(2)} ${targetCurrency})`;
        })
        .catch(error => {
            console.error('Error fetching exchange rates:', error);
            document.getElementById('result').innerHTML = 'An error occurred while fetching exchange rates.';
        });
}
