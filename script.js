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
        <label>Energy<progress id="${pet.name}-progress" value="${pet.energy}" max="100"></progress></label>
        <label>Fullness<progress id="${pet.name}-progress" value="${pet.fullness}" max="100"></progress></label>
        <label>Happines<progress id="${pet.name}-progress" value="${pet.happiness}" max="100"></progress></label>
        `;
        tamaDiv.querySelector(".buttonContainer").innerHTML =`
        <button>NAP</button>
        <button>EAT</button>
        <button>PLAY</button>
        `
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

done.addEventListener("click", () => {
    let tamagotchiName = document.querySelector("#tamagotchiName").value;
    let animal = document.querySelector("#animal").value;

    Pet.generatePet(tamagotchiName,animal)
});

