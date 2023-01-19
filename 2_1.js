let values = ["Строка", true, "Число", "Объект", "Не число", false];

/*
values.splice(1, 1, "Булевый тип")
    console.log(values);
*/

for(let i=0; i<values.length; i++) {
    if (typeof values[i] != "boolean") {
     continue;
   } else { values[i] = "Булевый тип";
   break
   }
   }
   console.log(values); 