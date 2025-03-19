class Pet{
    static animalTypes = ["Pig","Kow","Cat","Rabbit"];

    constructor(name,animalType){
        this.name = name;
        this.animalType = animalType;
        this.energy = 50;
        this.fullness = 50;
        this.happiness = 50;
    }
}

let myPet = new Pet("Mamma-Mu","Kow");

console.log(myPet);