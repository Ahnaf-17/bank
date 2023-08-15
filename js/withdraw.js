
// s1 
document.getElementById('withdraw').addEventListener('click', function(){
    // s2 
    const withdrawField = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    const withdrawTotal = document.getElementById('w-total');
    const previousWithdrawTotalString = withdrawTotal.innerText;
    const perviousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    const currentWithdrawTotal = perviousWithdrawTotal + withdrawAmount;

    withdrawTotal.innerText = currentWithdrawTotal;

    withdrawField.value = '';

    // balance total 

    const balanceTotal = document.getElementById('total');
    const perviousTotalAmountString = balanceTotal.innerText;
    const perviousTotalAmount = parseFloat(perviousTotalAmountString);
     const currentTotalAmount = perviousTotalAmount - withdrawAmount;
     balanceTotal.innerText = currentTotalAmount;

})