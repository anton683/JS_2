let ticket = "BM-12234567:RU";

ticket1 = ticket.split(/-/)[1];
ticket2 = ticket1.split(/:/)[0];

if (ticket2.length ==8){
	console.log("Выбран билет на концерт");
}
else if (ticket2.length ==12){
	console.log("Выбран билет в театр");
}
else {
	console.log("Билет не определен");
}