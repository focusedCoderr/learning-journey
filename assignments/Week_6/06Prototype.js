function BankAccount(balance){
    this.balance = balance;
    this.transactions = [];
}

BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
    const log = `Deposited ${amount}`;
    this.transactions.push(log);
}

BankAccount.prototype.withdraw =  function(amount){
    let log;
    if(this.balance>= amount){
        this.balance -= amount;
        log = `Withdrew ${amount}`;
        this.transactions.push(log);
    }else{
        log = `Insufficient balance`;
        this.transactions.push(log);
    }
}

BankAccount.prototype.getTransactionHistory = function(){
    return this.transactions;
}
const a = new BankAccount(2000);
a.deposit(200);
console.log(a.transactions);
console.log(a.balance);
a.deposit(300);
console.log(a.transactions);
console.log(a.balance);
