let array = [
    [ "boolean", true ], 
    [ "number", 4 ],
    [ "string", "word" ],
    [ "object", {}]
];

const countString = function (a) {
    let cnt = 0;
    for (let val of a) {
        if (typeof val[1] === "string") {
            cnt++;
        }
    }
    console.log(`Количество строковых элементов в именованном массиве: ${cnt}`)
}
countString(array);