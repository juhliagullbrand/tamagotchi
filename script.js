
class Pet{
    static animalTypes = ["Cow","Pig","Cat","Rabbit"];

    constructor(name,animalType){
        this.name = name;
        this.animalType = animalType;
        this.energy = 50;
        this.fullness = 50;
        this.happiness = 50;
    }

    static generatePet(name,animalType) {
        let pet = new Pet(name,animalType);
        document.querySelector(".name").innerHTML = pet.name;

        let img = document.createElement("img");
        let tamaDiv = document.querySelector(".tama");

        switch (pet.animalType) {
            case "Cow":
                tamaDiv.classList.add("tama-1");
                img.src = "/image/image-cow.png";
                document.querySelector(".animalDiv").append(img);
            break;
            case "Pig":
                tamaDiv.classList.add("tama-2");
                img.src = "/image/image-pig.png";
                document.querySelector(".animalDiv").append(img);
            break;
            case "Cat":
                tamaDiv.classList.add("tama-3");
                img.src = "/image/image-cat.png";
                document.querySelector(".animalDiv").append(img);
            break;
            case "Rabbit":
                tamaDiv.classList.add("tama-4");
                img.src = "/image/image-rabbit.png";
                document.querySelector(".animalDiv").append(img);
            break;
            default:
                console.error(`Det finns inget sådant djur`);
        }
        
        document.querySelector(".mode-column").innerHTML = `
        <label>Energy<progress id="${pet.name}-progress" value="${pet.energy}" max="100"></progress></label>
        <label>Fullness<progress id="${pet.name}-progress" value="${pet.fullness}" max="100"></progress></label>
        <label>Happines<progress id="${pet.name}-progress" value="${pet.happiness}" max="100"></progress></label>
        `;
        document.querySelector(".buttonContainer").innerHTML =`
        <button>NAP</button>
        <button>EAT</button>
        <button>PLAY</button>
        `

        return pet;
    }
}

Pet.generatePet("Mamma-Mu","Cow");