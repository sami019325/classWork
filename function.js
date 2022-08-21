console.log('function');

document.getElementById('depositValue').addEventListener('click', function depositFunction() {


    const depositValue = calculate('EnterDeposit')
    const depositInner = calculateInner('storedDeposit')
    const totalInner = calculateInner('total')



    console.log(depositValue, depositInner, totalInner)

    const deposit = depositValue + depositInner
    const total = totalInner + depositValue

    document.getElementById('storedDeposit').innerHTML = deposit
    document.getElementById('total').innerHTML = total

    // clear vale 


});

document.getElementById('Withdraw').addEventListener('click', function WithdrawFunction() {


    const WithdrawValue = calculate('EnterWithdraw')
    const WithdrawInner = calculateInner('storedWithdraw')
    const totalInner = calculateInner('total')



    console.log(WithdrawValue, WithdrawInner, totalInner)

    const Withdraw = WithdrawValue + WithdrawInner
    const total = totalInner - WithdrawValue

    document.getElementById('storedWithdraw').innerHTML = Withdraw
    document.getElementById('total').innerHTML = total

    // clear vale 


});

/* 
HH
`${ total } `

VV */