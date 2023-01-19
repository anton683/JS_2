let partNumbers = ["ER1234COM", "FIV987451RU","GE123JO","P4321NO"];

let partNumbers2 = partNumbers.filter(lastElements => (/[0-9]{2}[a-z]{2}$/ig) .test(lastElements) === true);

console.log(partNumbers2);
