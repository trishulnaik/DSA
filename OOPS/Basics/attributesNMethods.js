// design a class BankAccount

// attributes: 1. accountNumber 2.balance
// constructor to initalize the attributes

//methods: 1. deposit 2. withdraw 3. getDetails

class BankAccount{
    #accountNumber;
    #balance;
    constructor(accountNumber, balance){
        this.#accountNumber = accountNumber;
        this.#balance = balance;
    }
    deposit(amount){
        console.log("Action: Deposit");
        if(amount>=0){
            this.#balance+=amount;
            console.log(`Amount of ${amount} deposited successfully!`)
        }
        else{
            console.log("Error, Try again!");
        }
    }
    withdraw(amount){
        console.log("Action: Withdraw");
        if(amount<0 || this.#balance < 0 || this.#balance < amount){
            console.log("No funds to withdraw");
        }
        else{
            this.#balance-=amount;
            console.log(`Amount ${amount} withdrawn successfully!`)
        }
    }
    getDetails(accountNumber){
        console.log("Action: GetDetails");
        if(this.#accountNumber===accountNumber){
            console.log(`Dear ${this.#accountNumber} \n Balance: ${this.#balance}`);
        }
        else{
            console.log("Unkown User");
        }
    }
}

const TrishulAccount = new BankAccount(1,0);
TrishulAccount.withdraw(100);
TrishulAccount.deposit(-100);
TrishulAccount.deposit(100);
TrishulAccount.withdraw(150);
TrishulAccount.withdraw(-50);
TrishulAccount.withdraw(50);
TrishulAccount.getDetails(2);
TrishulAccount.getDetails(1);
