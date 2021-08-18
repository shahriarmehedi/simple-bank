// handle deposit button
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    
    const depositedTotal = document.getElementById('deposited-total');

    const currentDepositAmount = depositedTotal.innerText;
    const newDepositTotal = parseFloat(currentDepositAmount) + parseFloat(depositAmount);


    depositedTotal.innerText = newDepositTotal;

  
    // Upadate Account Balance
    const balanceTotal = document.getElementById('current-balance');
    const balanceTotalText = balanceTotal.innerText;
    const currentBalance = parseFloat(balanceTotalText);
    const newBalanceTotal = currentBalance + parseFloat(depositAmount);
    balanceTotal.innerText = newBalanceTotal;
    // clear deposit input field
    depositInput.value = '';


})

// handle Withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    const withdrawnTotal = document.getElementById('withdrawn-total');
    const currentWithdrawntext = withdrawnTotal.innerText;
    const currentWithdrawnTotal = parseFloat(currentWithdrawntext);
    const newWithdrawnTotal = currentWithdrawnTotal + newWithdrawAmount;

    withdrawnTotal.innerText = newWithdrawnTotal;

      // Upadate Account Balance again
    const balanceTotal = document.getElementById('current-balance');
    const currentBalanceText = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(currentBalanceText);
    const newBalanceTotal = currentBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear deposit input field
    withdrawInput.value = '';

})