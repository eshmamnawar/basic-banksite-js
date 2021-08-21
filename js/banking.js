function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear the input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalField, amount) {
    const totalElement = document.getElementById(totalField);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    const amountTotal = (previousTotal + amount);
    totalElement.innerText = amountTotal;
}

// get current balance
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return
}

// update balance 
function updateBlance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


// handle deposit button event 
document.getElementById('deposit-button').addEventListener('click', function () {

    // get the amount deposite 
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBlance(depositAmount, true);
    }

    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositAmountText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositAmountText);
    // const newDepositTotal = (previousDepositAmount + depositAmount);
    // depositTotal.innerText = newDepositTotal;

    // updateTotalField('deposit-total', depositAmount)

    // update account balance


    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // const newBalanceTotal = previousBalanceTotal + depositAmount;

    // balanceTotal.innerText = newBalanceTotal;

    // updateBlance(depositAmount, true)



    // clear the input field
    // depositInput.value = '';
});



// handle withdraw button event 
document.getElementById('withdraw-button').addEventListener('click', function () {

    // const withdrawInput = document.getElementById("withdraw-input");
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);

    const withdrawAmount = getInputValue("withdraw-input")
    const getCurrentBalance = getCurrentBalance()
    if (withdrawAmount > 0 && withdrawAmount < getCurrentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBlance(withdrawAmount, false);
        if (withdrawAmount > getCurrentBalance) {
            console.log('Stop Dreaming :D')
        }
    }


    // set withdraw total 
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawAmountText = withdrawTotal.innerText;
    // const previousWithdrawAmountTotal = parseFloat(previousWithdrawAmountText);

    // const newWithdrawTotal = previousWithdrawAmountTotal + withdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal

    // updateTotalField('withdraw-total', withdrawAmount)

    // update account balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // const newBalanceTotal = previousBalanceTotal - withdrawAmount;

    // balanceTotal.innerText = newBalanceTotal;

    // updateBlance(withdrawAmount, false)
    // // clear the withdraw input field
    // withdrawInput.value = '';
})

