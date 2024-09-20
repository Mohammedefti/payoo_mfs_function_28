document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney  = getInputFieldValueById('input-add-money');
    const pinNumber  = getInputFieldValueById('input-pin-number');
    

    if (isNaN(addMoney)) {
        alert('Failed to add money');
        return;
    }


    // wrong way to verify . do not try it at your serious website
    if (pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
        console.log(balance, addMoney);
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText= newBalance;

        // add to transaction history
        const p  = document.createElement('p');
        p.innerText =  `Added : ${addMoney} Tk. New Balance: ${newBalance}`;
        console.log(p);

        // should be a common function
        document.getElementById('transaction-container').appendChild(p);

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class= "text-2xl font-bold"> Cash Out </h4>
        <p> ${cashOut} withdraw. New Balance ${newBalance}</p>
        `

        document.getElementById('transaction-container').appendChild(div);
    } else {
        alert('Failed to add the money');
    }
})