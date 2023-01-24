let firstName = "Александр";

let lastName = "Петров";

let user={
    firstName,
    lastName,
    get fullName(){
    return (`${this.firstName} ${this.lastName}`)
    }
    }
    console.log(user.fullName);

