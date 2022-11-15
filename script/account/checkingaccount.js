class CheckingAccount extends Account{
    constructor (accountDetails)
    {
        let{overdraft=0}=accountDetails;
        let {number}=accountDetails
        super(number);
        this._overdraft=overdraft;
    }

    getOverdraft()
    {return this._overdraft;}

    setOverdraft(overdraft)
    {this._overdraft=overdraft;}

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance+this._overdraft) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance+ ": Overdraft "+this._overdraft;
    }
    endOfMonth(){
        if(this.getBalance()<0)
        {return "Warning, low balance CheckingAccount: "+ this.getNumber() +" balance: "+this.getBalance()+" overdraft limit: "+this.getOverdraft()}
        else
        {
            return "No overdarft CheckingAccount: "+ this.getNumber() +" balance: "+this.getBalance()+" overdraft limit: "+this.getOverdraft();
        }
    }
}