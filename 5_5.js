class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}

class User extends Permissions{
constructor(name) {
super()
this.name=name
}
}