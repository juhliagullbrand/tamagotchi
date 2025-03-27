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
        let idName = "#tama" + counter;
        let tamaDiv = document.querySelector(idName);
        // pet.startTimer(tamaDiv);
        let img = document.createElement("img");

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
        <button class="napBtn"><img src="/image/moon-solid.svg" alt="nap" height="20"></button>
        <button class="eatBtn"><img src="/image/utensils-solid.svg" alt="eat" height="20"></button>
        <button class="playBtn"><img src="/image/gamepad-solid.svg" alt="game" height="20"></button>
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
    minStatus(tamaDiv) {
        this.energy = Math.max(0, this.energy);
        this.fullness = Math.max(0, this.fullness);
        this.happiness = Math.max(0, this.happiness);

        if (this.energy === 0 || this.fullness === 0 || this.happiness === 0) {
            tamaDiv.remove();
        }
    


    }
    // startTimer(tamaDiv){
    //     setInterval(() => {
    //         this.energy -= 15;
    //         this.fullness -= 15;
    //         this.happiness -= 15;

    //         this.minStatus(tamaDiv);

    //         tamaDiv.querySelector(".mode-column").innerHTML = `
    //         <label>Energy ${this.energy}<progress value="${this.energy}" max="100"></progress></label>
    //         <label>Fullness ${this.fullness}<progress value="${this.fullness}" max="100"></progress></label>
    //         <label>Happiness ${this.happiness}<progress value="${this.happiness}" max="100"></progress></label>
    //     `;
    //     },10000);
    // }
}
class Activity{
    static nap(pet,tamaDiv){
        pet.energy += 40;
        pet.fullness -= 10;
        pet.happiness -= 10;
        pet.minStatus(tamaDiv);

        tamaDiv.querySelector(".mode-column").innerHTML = `
        <label>Energy ${pet.energy}<progress id="${pet.name}-progress" value="${pet.energy}" max="100"></progress></label>
        <label>Fullness ${pet.fullness}<progress id="${pet.name}-progress" value="${pet.fullness}" max="100"></progress></label>
        <label>Happines ${pet.happiness}<progress id="${pet.name}-progress" value="${pet.happiness}" max="100"></progress></label>
        `;

        Activity.chatBubble(pet,tamaDiv, "nap");
        Activity.historyBubble(pet,tamaDiv,"nap");
    }

    static play(pet,tamaDiv){
        pet.energy -= 10;
        pet.fullness -= 10;
        pet.happiness += 30;
        pet.minStatus(tamaDiv);
        tamaDiv.querySelector(".mode-column").innerHTML = `
        <label>Energy ${pet.energy}<progress id="${pet.name}-progress" value="${pet.energy}" max="100"></progress></label>
        <label>Fullness ${pet.fullness}<progress id="${pet.name}-progress" value="${pet.fullness}" max="100"></progress></label>
        <label>Happines ${pet.happiness} <progress id="${pet.name}-progress" value="${pet.happiness}" max="100"></progress></label>
        `;

        Activity.chatBubble(pet,tamaDiv, "play");
        Activity.historyBubble(pet,tamaDiv,"play");
    }

    static eat(pet,tamaDiv) {
        pet.energy -= 15;
        pet.fullness += 30;
        pet.happiness += 5;
        pet.minStatus(tamaDiv);
        tamaDiv.querySelector(".mode-column").innerHTML = `
        <label>Energy ${pet.energy}<progress id="${pet.name}-progress" value="${pet.energy}" max="100"></progress></label>
        <label>Fullness ${pet.fullness}<progress id="${pet.name}-progress" value="${pet.fullness}" max="100"></progress></label>
        <label>Happines ${pet.happiness}<progress id="${pet.name}-progress" value="${pet.happiness}" max="100"></progress></label>
        `;

        Activity.chatBubble(pet,tamaDiv,"eat");
        Activity.historyBubble(pet,tamaDiv,"eat");
    }

    static chatBubble (pet,tamaDiv,action){
        let chatBubble = tamaDiv.querySelector(".chatBubble");
        
        if(!chatBubble){
            chatBubble = document.createElement("div");
            chatBubble.classList.add("chatBubble");
            tamaDiv.querySelector(".chatContainer").append(chatBubble);
        }

        switch (action) {
        case "nap":
            chatBubble.innerHTML = `You took a nap with ${pet.name}`;
            break;
        case "play":
            chatBubble.innerHTML = `You played with ${pet.name}`;
            break;
        case "eat":
            chatBubble.innerHTML = `You fed ${pet.name}`;
            break;
        default:
            chatBubble.innerHTML = "";
        }
        
    }

    static historyBubble (pet,tamaDiv,action){
        let historyBubble = tamaDiv.querySelector(".historyBubble");

        if(!historyBubble){
            historyBubble = document.createElement("div");
            historyBubble.classList.add("historyBubble");
            tamaDiv.querySelector(".historyContainer").append(historyBubble);

            let ul = document.createElement("ul");
            historyBubble.append(ul);
        }

        let ul = historyBubble.querySelector("ul");
        let li = document.createElement("li");

        switch (action) {
            case "nap":
                li.innerText = `You took a nap with ${pet.name}`;
                break;
            case "play":
                li.innerText = `You played with ${pet.name}`;
                break;
            case "eat":
                li.innerText = `You fed ${pet.name}`;
                break;
        }
        ul.appendChild(li);
    }
    
}


done.addEventListener("click", () => {
    let tamagotchiName = document.querySelector("#tamagotchiName").value;
    let animal = document.querySelector("#animal").value;

    Pet.generatePet(tamagotchiName,animal)
});