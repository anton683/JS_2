let values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"];

let start = values.findIndex(el => typeof el === "boolean");
let end = values.findLastIndex(el => typeof el === "boolean");
let result = values.slice(start, end + 1)
console.log(result);