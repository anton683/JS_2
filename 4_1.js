let pet_1 = { 
    name: "Шарик", 
    age: 10 
};
let pet_2 = { 
    name: "Жучка", 
    age: 5
};

function getName() {
    return `${this.name} ${this.age}`;
}
pet_1.getName = getName;
pet_2.getName = getName;
console.log(`${pet_1.getName()}; ${pet_2.getName()}`);