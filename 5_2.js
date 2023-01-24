let employees = {
    firstName: "Петя",
    lastName: "Иванов",
    ratePerDay: 2500,
    workingDays: 5,
    getSalary() { console.log(employees.ratePerDay * employees.workingDays )} 
};

let result = [];
for(key in employees){
if(typeof employees[key] !== "function"){
result.push(key);
}
}
console.log(result.join(", "))