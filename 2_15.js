let values = ["100", "30", "Не число", "20", "Тоже не число"];

let result = 0;
for(let i = 0;i < values.length; i++) {
 if (isNaN(values[i]) === true){
continue
} else {
    result = result + Number(values[i]);
}
}
    console.log(result);