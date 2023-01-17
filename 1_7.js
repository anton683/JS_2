let symbols = "floor";

let fl = symbols.codePointAt(0) + symbols.codePointAt(1);
if (fl % 2 == 0) {
    console.log(String.fromCodePoint(fl));
}
else {
    console.log("Символ обнаружить не удалось");
}