document.getElementById('btn-deposite').addEventListener('click', function(){
    const userInput = document.getElementById('user-input');
    const userAmount = userInput.value;
    const userNumberAmount = parseFloat(userAmount);
    // console.log(userAmount);

    const currentUserAmount = document.getElementById('current-user-amount');
    const currentAmount = currentUserAmount.innerText;
    const currentNumberAmount = parseFloat(currentAmount);
    const totalDeposite = userNumberAmount + currentNumberAmount;
    currentUserAmount.innerText = totalDeposite;
    userInput.value = '';

    const currentUserBalance = document.getElementById('currentBalance');
    const currentBalance = currentUserBalance.innerText;
    const currentNumberBalance = parseFloat(currentBalance);
    currentUserBalance.innerText = currentNumberBalance + userNumberAmount;

})

