let article = {
    title: "Загадки дачного огурца", 
    text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
};

let author = {
    name: "Ричард М.В.",
    age: 43
};

let res = Object.assign(article, author);
console.log(res);