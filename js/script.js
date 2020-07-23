
    // login-area 
    var enterBtn = document.getElementById('Enter');
        enterBtn.addEventListener("click", function (){
        var loginArea = document.getElementById('login-area');
        loginArea.style.display ="none";
        var transactionArea = document.getElementById('transaction-area');
        transactionArea.style.display ="block";
     })


     // deposit-area 
     var depositArea = document.getElementById('deposit-area');
     depositArea.addEventListener('click', function(){
     const depositAmount = getInputValue("depositAmount");

    updateTowFunction ("current-deposit", depositAmount);
    updateTowFunction ("current-balance", depositAmount);

     })
   

     // withdraw-area 
     var withdrawBtn = document.getElementById('withdraw-btn');
     withdrawBtn.addEventListener('click', function(){
     const withdrawAmountString = getInputValue("withdraw-amount");

     updateTowFunction ("withdraw-balance", withdrawAmountString);
    updateTowFunction ("current-balance", -1 * withdrawAmountString);

     })


     function updateTowFunction (id, value){
        var depositDolor = document.getElementById(id).innerText;
       var currentStringConvert = parseFloat (depositDolor);
       var totalDepositNumber = value + currentStringConvert ;
       document.getElementById(id).innerHTML = totalDepositNumber;
     }

     function getInputValue (value) {
        var depositAmount = document.getElementById(value).value;
       var depositStringConvert = parseFloat(depositAmount);
       document.getElementById('depositAmount').value ="";
       return depositStringConvert ;
     }
    
