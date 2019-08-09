const manageBankAccount =(initialBalance)=>{
let accountBalance=initialBalance;
return {
getBalance:function(){return accountBalance;},
deposit:function(amount){accountBalance +=amount;},
withdraw:function(amount){
if(amount>accountBalance){
return 'you cannot draw that much!';
}
accountBalance -=amount;
}
};
}


const accountManager=manageBankAccount(0);
 accountManager.deposit(1000);
accountManager.withdraw(500);
accountManager.getBalance(500);