class SavingsAccount extends Account{
    constructor (accountDetails)
    {
        let{interest=0}=accountDetails;
        let {number}=accountDetails
        super(number);
        this._interest=interest;
    }

    getInterest()
    {return this._interest;}

    setInterest(interest)
    {this._interest=interest;}

    addInterest()
    {
        //console.log(this);
        this._balance=this._balance+ this._balance*this._interest/100;
        //or
        //super._balance=this._balance+ this._balance*this._interest/100;
        //or
        // let amt=this._balance*this._interest/100;
        // this.deposit(amt);
        //console.log(this);
        
    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance+ ": Interest "+this._interest;
    }

    endOfMonth()
    {
        this.addInterest();
        return "Interest added SavingsAccount: " + this._number + " balance: " + this._balance+ ": interest: "+this._interest;
    }
}