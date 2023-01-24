let array = [2, 4, 7, 8, 1];
let num = 2;

function queue(num, ...array) {
    let sum = 0;
    array.sort((a,b) => a-b);
    console.log(array);
    for (let i = 0; i < num; i++) {
    sum += array[i];    
    }
    
    return sum;
    }
    
    console.log(queue(num, ...array));


