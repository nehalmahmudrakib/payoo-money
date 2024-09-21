// Add money to the account

// Step: 1 --> Add an event handler to the add money button inside the form
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        // prevent page reload after form submitted
        event.preventDefault();

        // Step: 2 --> Get money to be added to the account
        const addMoneyInput = document.getElementById('input-add-amount').value;
        console.log(addMoneyInput)

        // get the pin number provided
        const inputPinNumber = document.getElementById('input-pin-number').value;
        console.log(inputPinNumber)

        // Step: 3 --> Check the pin number
        if( inputPinNumber === '1234' ){
            console.log('adding money to your account')

            // Step 4: get the current balance
            const balance = document.getElementById('account-balance').innerText;
            console.log(balance)

            // Step 5: add money with balance
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            const newBalance = addMoneyNumber + balanceNumber;
            console.log(newBalance)

            // Step 6: --> update the balance in the ui/dom
            document.getElementById('account-balance').innerText = newBalance

        }
        else{
            alert('Failed to add money! please try again')
        }

})