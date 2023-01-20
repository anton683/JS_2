let numbers = [10, 20, 33, 55, 100];

let max50 = 0;
numbers.reduce(function(previousValue, currentItem) {
    let sum = previousValue + currentItem;
    if ( sum <= 50) {
        max50++
    }
    return sum;
  }, 0)

console.log(max50);