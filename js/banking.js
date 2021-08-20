// handle deposit button event 
document.getElementById('deposit-button').addEventListener('click', function () {

    // get the amount deposite 
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    const newDepositTotal = (previousDepositAmount + newDepositAmount);

    depositTotal.innerText = newDepositTotal;

    // update account balance


    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;





    // clear the input field
    depositInput.value = '';
});



// handle withdraw button event 
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmountText = withdrawTotal.innerText;
    const previousWithdrawAmountTotal = parseFloat(previousWithdrawAmountText);

    const newWithdrawTotal = previousWithdrawAmountTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal


    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;

    balanceTotal.innerText = newBalanceTotal;

    // clear the withdraw input field
    withdrawInput.value = '';
})

