// TODO: create the character object here
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    describe(){
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
}
}
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());


// TODO: create the dog object here
const dog ={
    name: "Fang",
    species: "boarhound",
    size: 75,
    bark (){
        return `Grrr! Grrr!`;
    }
}
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// Modeling a Bank Account
//A name property set to "Alex".
//A balance property set to 0.
//A credit method adding the (positive or negative) value passed as an argument to the account balance.
//A describe method returning the account description.
//Use this object to show its description, crediting 250, debiting 80, then show its description again.

const account = {
    name: "Alex",
    balance: 0,
    describe(){
        return `owner: ${this.name}, balance ${this.balance}`;
    },
        
    credit(account){
        this.balance += 250;
        this.balance -+80;
        return this.balance;
}
}
console.log(account.describe());
(account.credit());
console.log(account.describe());