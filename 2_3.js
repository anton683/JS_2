let layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>";

let newArr = [];
let arr = layout.match(/\d+/g);
    if (arr !== null) {
      for (let i = 0; i <= arr.length - 1; i++) {
         if (arr[i] % 2 == 0) {newArr.push(arr[i] ** 2);
}   else {
         newArr.push(+arr[i]);
}
}
}
console.log(newArr);
