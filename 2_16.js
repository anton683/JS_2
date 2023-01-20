let array_1 = [2, 4, 7, 8, 1];
let array_2 = [2, 5, 11, 6, 1];

function intersection(array_1, array_2) {
     let res = array_1.filter(el => {
       return array_2.includes(el);
     });
     res = res.sort((a, b) => b - a);
    return res;
}
console.log(intersection(array_1, array_2))

