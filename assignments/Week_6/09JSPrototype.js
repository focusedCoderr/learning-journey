function BankAccount(accountNumber, holderName, balance){
    this.accountNumber = accountNumber;
    this.holderName = holderName;
    this.balance = balance;
}

BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount){
    if(this.balance>=amount){
        this.balance -= amount;
    }
}

BankAccount.prototype.transfer = function(amount, targetAccount){
    if(this.balance>=amount){
        // targetAccount.balance += amount;
        targetAccount.deposit(amount);
        this.balance -= amount;
    }
}