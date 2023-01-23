let goods = {
    title: "Самокат", 
    price: 6000,
    good_id: 1
};

let res1 = Object.keys(goods);
let res2 = Object.values(goods);
let res3  = res1.concat(res2);
console.log(res3);