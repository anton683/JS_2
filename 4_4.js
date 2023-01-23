let props= { 
    name: "Анатолий", 
    age: 29,
    sayHi: ()=>"привет"
};

function getValue() {
    let str = "";
    for (k in this) {
      if (typeof this[k] !== "function") {
        str += `${k}: ${this[k]}, `;
      }
    }
    str = str.slice(0, -2);
    console.log(`Значения свойств объекта props (${str})`);
  }
  getValue.call(props);