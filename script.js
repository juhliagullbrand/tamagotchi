let done = document.querySelector("#done");
let counter = 1;
class Pet{
    static animalTypes = ["Cow","Pig","Cat","Rabbit"];

    constructor(name,animalType){
        this.name = name;
        this.animalType = animalType;
        this.energy = 50;
        this.fullness = 50;
        this.happiness = 50;
    }

    static generatePet(name,animal) {
        let pet = new Pet(name,animal);
        let img = document.createElement("img");
        let idName = "#tama" + counter;
        let tamaDiv = document.querySelector(idName);

        tamaDiv.querySelector(".name").innerHTML = pet.name;
        
        switch (counter) {
            case 1:
                tamaDiv.classList.add("tama-1");
                img.src = this.generateAnimalImg(animal);
                tamaDiv.querySelector(".animalDiv").append(img);
            break;
            case 2:
                tamaDiv.classList.add("tama-2");
                img.src = this.generateAnimalImg(animal);;
                tamaDiv.querySelector(".animalDiv").append(img);
            break;
            case 3:
                tamaDiv.classList.add("tama-3");
                img.src = this.generateAnimalImg(animal);;
                tamaDiv.querySelector(".animalDiv").append(img);
            break;
            case 4:
                tamaDiv.classList.add("tama-4");
                img.src = this.generateAnimalImg(animal);;
                tamaDiv.querySelector(".animalDiv").append(img);
            break;
            default:
                console.error(`Det finns inget sådant djur`);
        } 
        tamaDiv.querySelector(".mode-column").innerHTML = `
        <label>Energy ${pet.energy}<progress id="${pet.name}-progress" value="${pet.energy}" max="100"></progress></label>
        <label>Fullness ${pet.fullness}<progress id="${pet.name}-progress" value="${pet.fullness}" max="100"></progress></label>
        <label>Happines ${pet.happiness}<progress id="${pet.name}-progress" value="${pet.happiness}" max="100"></progress></label>
        `;
        tamaDiv.querySelector(".buttonContainer").innerHTML =`
        <button class="napBtn">NAP</button>
        <button class="eatBtn">EAT</button>
        <button class="playBtn">PLAY</button>
        `
        tamaDiv.querySelector(".napBtn").addEventListener("click", () => {
            Activity.nap(pet,tamaDiv)});
        tamaDiv.querySelector(".playBtn").addEventListener("click", () => {
            Activity.play(pet,tamaDiv)});
        tamaDiv.querySelector(".eatBtn").addEventListener("click", () => {
            Activity.eat(pet,tamaDiv)});

        counter++;
        return pet;
    }
    static generateAnimalImg(animal){
        switch (animal) {
                case "Cow":
                    return "/image/image-cow.png";
                break;
                case "Pig":
                    return "/image/image-pig.png";
                break;
                case "Cat":
                    return "/image/image-cat.png";
                break;
                case "Rabbit":
                    return "/image/image-rabbit.png";
                break;
                default:
                    console.error(`Det finns inget sådant djur`);
            }
    }
}
class Activity{
    static nap(pet,tamaDiv){
        pet.energy += 40;
        pet.fullness -= 10;
        pet.happiness -= 10;
        tamaDiv.querySelector(".mode-column").innerHTML = `
        <label>Energy ${pet.energy}<progress id="${pet.name}-progress" value="${pet.energy}" max="100"></progress></label>
        <label>Fullness ${pet.fullness}<progress id="${pet.name}-progress" value="${pet.fullness}" max="100"></progress></label>
        <label>Happines ${pet.happiness}<progress id="${pet.name}-progress" value="${pet.happiness}" max="100"></progress></label>
        `;
        let chatBubble = document.createElement("div");
        chatBubble.classList.add("chatBubble");
        chatBubble.innerHTML = `You took a nap with ${pet.name}`;
        tamaDiv.querySelector(".chatContainer").append(chatBubble);
    }
    
    static play(pet,tamaDiv){
        pet.energy -= 10;
        pet.fullness -= 10;
        pet.happiness += 30;
        tamaDiv.querySelector(".mode-column").innerHTML = `
        <label>Energy ${pet.energy}<progress id="${pet.name}-progress" value="${pet.energy}" max="100"></progress></label>
        <label>Fullness ${pet.fullness}<progress id="${pet.name}-progress" value="${pet.fullness}" max="100"></progress></label>
        <label>Happines ${pet.happiness} <progress id="${pet.name}-progress" value="${pet.happiness}" max="100"></progress></label>
        `;
        let chatBubble = document.createElement("div");
        chatBubble.classList.add("chatBubble");
        chatBubble.innerHTML = `You played with ${pet.name}`;
        tamaDiv.querySelector(".chatContainer").append(chatBubble);
    }
    static eat(pet,tamaDiv) {
        pet.energy -= 15;
        pet.fullness += 30;
        pet.happiness += 5;
        tamaDiv.querySelector(".mode-column").innerHTML = `
        <label>Energy ${pet.energy}<progress id="${pet.name}-progress" value="${pet.energy}" max="100"></progress></label>
        <label>Fullness ${pet.fullness}<progress id="${pet.name}-progress" value="${pet.fullness}" max="100"></progress></label>
        <label>Happines ${pet.happiness}<progress id="${pet.name}-progress" value="${pet.happiness}" max="100"></progress></label>
        `;
        let chatBubble = document.createElement("div");
        chatBubble.classList.add("chatBubble");
        chatBubble.innerHTML = `You fed ${pet.name}`;
        tamaDiv.querySelector(".chatContainer").append(chatBubble);
    }
}

done.addEventListener("click", () => {
    let tamagotchiName = document.querySelector("#tamagotchiName").value;
    let animal = document.querySelector("#animal").value;

    Pet.generatePet(tamagotchiName,animal)
});