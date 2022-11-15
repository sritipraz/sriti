class Bank{
    // constructor(accounts)
    // {

    // }
    static nextNumber=1001
    addAccount()
    {
        let account=new Account(Bank.nextNumber++);
        if(!this.accounts)
        {this.accounts=[];}
        this.accounts.push(account);
    }
    addSavingsAccount(interest)
    {
        let account=new SavingsAccount({number:Bank.nextNumber++,interest:interest});
        if(!this.accounts)
        {this.accounts=[];}
        this.accounts.push(account);

    }

    addCheckingAccount(overdraft)
    {
        let account=new CheckingAccount({number:Bank.nextNumber++,overdraft:overdraft});
        if(!this.accounts)
        {this.accounts=[];}
        this.accounts.push(account);
    }

    closeAccount(number)
    {
        // this.accounts.forEach(account => {
        //     if(account.getNumber===number)
        //     {this.accounts.pop(account)}
        // });
        this.accounts=this.accounts.filter(account=>account.getNumber()!==number);
    }

    accountReport()
    {
        let finalOutput="";
        this.accounts.forEach(account => {
            //let output=account.endOfMonth();
            let accountdetail=account.toString();
            finalOutput+=accountdetail +"/n";
        });
        return finalOutput
    }
    endOfMonth()
    {
        let finalOutput="";
        this.accounts.forEach(account => {
            let output=account.endOfMonth();
            //let accountdetail=account.toString();
            finalOutput+=output+"/n";
        });
        return finalOutput;
    }
}