let words = ["Заказ", "Такси", "Доход"];
 

let result = [0,0];

words.forEach((element) => {
if(element.toLowerCase() === element.split('').reverse().join('').toLowerCase()) {
    result[0]++;
 } else {
    result[1]++;
 }
});
 console.log(result);
 
