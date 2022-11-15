describe("The get number function",function(){
    it("returns account number which was passed when account was created.",function(){
        let acc=new Account("6785622");
        assert.equal(acc.getNumber(),6785622);
    });
});


describe("The get balance function",function(){
    it("returns balance 0.0 when deposit has not been made.",function(){
        let acc=new Account("6785622");
        assert.equal(acc.getBalance(),0.0);
    });

    it("returns balance 5.0 when $5 deposit has been made.",function(){
        let acc=new Account("6785622");
        acc.deposit(5)
        assert.equal(acc.getBalance(),5.0);
    });

    it("returns balance 3.0 when $5 deposit has been made and $2 has been withdrawn.",function(){
        let acc=new Account("6785622");
        acc.deposit(5);
        acc.withdraw(2);
        assert.equal(acc.getBalance(),3.0);
    });
});


describe("The get deposit function",function(){
    it("Throws error when deposit amount less than 0",function(){
        let acc=new Account("6785622");
        assert.throws(() =>acc.deposit(-5),RangeError,"Deposit amount has to be greater than zero");
    });
});

describe("The get withdraw function",function(){
    it("Throws error when withdraw amount less than 0",function(){
        let acc=new Account("6785622");
        assert.throws(() =>acc.withdraw(-5),RangeError,"Withdraw amount has to be greater than zero");
    });

    it("Throws error when withdraw amount greater than balance",function(){
        let acc=new Account("6785622");
        assert.throws(() =>acc.withdraw(5),Error,"Insufficient funds");
    });
});

describe("The toString function",function(){
    it("returns account info",function(){
        let acc=new Account("6785622");
        assert.equal(acc.toString(),"Account 6785622: balance 0");
    });
});

// savingsAccount tests
describe("The getInterest function",function(){
    it("returns account's interest that had been set with constuctor",function(){
        let acc=new SavingsAccount({number:"6785622",interest:0.2});
        assert.equal(acc.getInterest(),0.2);
    });
});


describe("The setInterest function",function(){
    it("should set new interest rate",function(){
        let acc=new SavingsAccount({number:"6785622",interest:0.2});
        acc.setInterest(0.3);
        assert.equal(acc.getInterest(),0.3);
    });
});

describe("The addInterest function",function(){
    it("should set new balance after adding interest",function(){
        let acc=new SavingsAccount({number:"6785622",interest:20});
        acc.deposit(100);
        acc.addInterest();
        assert.equal(acc.getBalance(),120);
    });
});

describe("The toString function savings account",function(){
    it("returns account info with interest",function(){
        let acc=new SavingsAccount({number:"6785622",interest:20});
        assert.equal(acc.toString(),"Account 6785622: balance 0: Interest 20");
    });
});


//checking account
describe("The getOverdraft function",function(){
    it("returns account's overdraft amount that had been set with constuctor",function(){
        let acc=new CheckingAccount({number:"6785622",overdraft:10});
        assert.equal(acc.getOverdraft(),10);
    });
});


describe("The setOverdraft function",function(){
    it("should set new overdraft amount",function(){
        let acc=new CheckingAccount({number:"6785622",overdraft:10});
        acc.setOverdraft(20);
        assert.equal(acc.getOverdraft(),20);
    });
});

describe("The toString function checking account",function(){
    it("returns account info with overdraft",function(){
        let acc=new CheckingAccount({number:"6785622",overdraft:10});
        assert.equal(acc.toString(),"Account 6785622: balance 0: Overdraft 10");
    });
});

//check bank
describe("The addAccount function",function(){
    it("should add the account everythime it is called",function(){
        let bank=new Bank();
        bank.addAccount();
        bank.addAccount();
        assert.equal(bank.accounts.length,2);
    });
});

describe("The addSavingsAccount function",function(){
    it("should add the savings account everythime it is called",function(){
        let bank=new Bank();
        bank.addSavingsAccount(20);
        bank.addSavingsAccount(10);
        bank.addSavingsAccount(10);
        assert.equal(bank.accounts.length,3);
    });
});

describe("The addCheckingAccount function",function(){
    it("should add the checking account everythime it is called",function(){
        let bank=new Bank();
        bank.addCheckingAccount(20);
        bank.addCheckingAccount(10);
        bank.addCheckingAccount(10);
        assert.equal(bank.accounts.length,3);
    });
});

describe("The closeAccount function",function(){
    it("should remove an account with given number",function(){
        let bank=new Bank();
        bank.addCheckingAccount(20);
        bank.addCheckingAccount(10);
        bank.addCheckingAccount(10);
        bank.closeAccount(bank.accounts[2].getNumber());
        assert.equal(bank.accounts.length,2);
    });
});
describe("The toString function",function(){
    it("should return account details",function(){
        let bank=new Bank();
        bank.addCheckingAccount(20);
        bank.addSavingsAccount(10);
        
        let output=bank.accountReport();
        assert.include(output,"Overdraft 20");
        assert.include(output,"Interest 10");
    });
});
describe("The endofmonth function",function(){
    it("should return account details after adding intrest for savings account and check if there in overdraft for checking account.",function(){
        let bank=new Bank();
        bank.addCheckingAccount(20);
        bank.addSavingsAccount(10);
        bank.accounts[0].withdraw(5);
        let output=bank.endOfMonth();
        assert.include(output,"Interest added");
        assert.include(output,"Warning");
    });
});