document.getElementById('btn-cash-out').addEventListener('click', function (event){
    event.preventDefault();
    const cashOutAmount = document.getElementById('cash-out-amount').value;
    const cashOutNumber = parseFloat(cashOutAmount);
    const cashOutPin = document.getElementById('cash-out-pin').value;

    if( cashOutPin === '1234' ){
        
        const accountBalance = document.getElementById('account-balance').innerText;
        const accountBalanceNumber = parseFloat(accountBalance)
        const balance = accountBalanceNumber - cashOutNumber
        console.log(balance)

        document.getElementById('account-balance').innerText = balance

    }
    else{
        alert('wrong pin! try again later')
    }
})