let name = "Pizza";
let phone = "81234567890";

class Delivery {
    constructor(name, phone) {
    this.name = name;
    this.phone = phone;
    this.validPhone = (phone.match(/^\+/)) ? true : false;
    }
    }
     const deliveryName = new Delivery(name, phone);
    console.log(deliveryName.validPhone);
    
