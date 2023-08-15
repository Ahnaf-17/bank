document.getElementById('deposit').addEventListener('click',function(){
const depositField = document.getElementById('deposit-amount');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);

// get total deposit 
const depositTotal = document.getElementById
('d-total');
const depositTotalValueString = depositTotal.innerText;
const depositTotalValue = parseFloat(depositTotalValueString)

const currentDepositTotal = depositTotalValue + newDepositAmount;

depositTotal.innerText = currentDepositTotal;



// balance 
const totalAmount = document.getElementById('total');
const perviousTotalAmountString = totalAmount.innerText;
const perviousTotalAmount  = parseFloat(perviousTotalAmountString);

const currentTotalAmount = perviousTotalAmount + newDepositAmount;
totalAmount.innerText = currentTotalAmount;

// clear 
depositField.value = '';

})