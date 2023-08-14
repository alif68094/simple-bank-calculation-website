document.getElementById('btn-widthdraw').addEventListener('click', function(){

    const userWidthDraw = document.getElementById('user-widthdraw');
    const userInputWidthDraw = userWidthDraw.value;
    const userInputWidthDrawNumber = parseFloat(userInputWidthDraw);

    const previousWidthDraw = document.getElementById('previous-Widthdraw');
    const previousWidthDrawAmount = previousWidthDraw.innerText;
    const previousWidthDrawAmountNumber = parseFloat(previousWidthDrawAmount);
    previousWidthDraw.innerText = userInputWidthDrawNumber + previousWidthDrawAmountNumber;
    userWidthDraw.value = '';

    const currentUserBalanceWidth = document.getElementById('currentBalance');
    const currentBalanceWidth = currentUserBalanceWidth.innerText;
    const currentNumberBalanceWidth = parseFloat(currentBalanceWidth);
    currentUserBalanceWidth.innerText =  currentNumberBalanceWidth - userInputWidthDrawNumber ;
})