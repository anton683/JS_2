let tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140.";

let obj = {};

let arr = tickets.split(".");

arr = arr.filter(el => {
    if (el) {
      return el.trim()
    } 
  });

  arr = arr.map(el => {
    return el.split(": ")
  });

  arr.forEach(el => {
    el[0] = el[0].trim();
    obj[el[0].toLowerCase()] = el[1].split(", ")
  });
  
  console.log(obj);
