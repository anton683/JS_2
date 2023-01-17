let phone = "+712:34567*8,90";

phone = phone.replace((/,/ig), "");
phone = phone.replace((/:/ig), "");
phone = phone.replace((/\*/ig), "");
phone = phone.replace((/ /ig), "");
console.log(phone);