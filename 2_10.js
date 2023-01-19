let randValues = ["Банан", 3, "Апельсин", 2, "Вишня"];

randValues.sort(); 
randValues.sort((a, b) => a - b);
console.log(randValues);