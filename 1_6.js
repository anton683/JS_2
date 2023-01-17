let symbols = "Первый номер";

let first = symbols.codePointAt(0);

if (first >= 1 && first <= 100){
	console.log("Первый символ цифра");
}
else {
	console.log("Первый символ не цифра");
}
