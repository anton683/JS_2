let employee  = [
    ["firstName", "Ivan"], 
    ["lastName", "Ivanov"],
    ["hireDate", "21.10.2015"]
];

let employeeOne = new Map(employee);
employeeOne.delete("hireDate");
employeeOne.set("jobName", "IT PROG");
let employeeTwo = [];
for (let item of employeeOne) {
    employeeTwo.push(item);
}
console.log(employeeTwo);