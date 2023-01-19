values = [10, 185, 11200, 980];

let indexOfvalue = values.findIndex((element) => String(element).length === 4)
if(indexOfvalue === -1){
console.log("Искомый элемент не был найден");
}
else{
console.log(indexOfvalue);
}