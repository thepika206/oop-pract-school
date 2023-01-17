class Person {
    name

    constructor(name) {
        this.name = name
    }

    introduceSelf() {
        console.log(`Hi, I'm ${this.name}`)
    }
}

//test Person
// let patrick = new Person('Patrick')
// patrick.introduceSelf()

class Professor extends Person {
    teaches
    #payBand = 0

    constructor(name, teaches) {
        super(name)
        this.teaches = teaches
    }

    introduceSelf() {
        console.log(`My name is ${this.name}, I've been here for ${this.#payBand} years and I will be your ${this.teaches} professor.`)
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * (5-1) + 1)
        console.log(grade)
    }

    gainExperience(){
        this.#payBand ++
    }


    
}

//test Professor class
// const einstein = new Professor('Einstein', 'physics')
// einstein.gainExperience()
// einstein.introduceSelf()

class Student extends Person {
    #year

    constructor (name, year){
        super(name)
        this.#year = year
    }

    introduceSelf(){
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`) 
    }

    canStudyArchery(){
        return this.#year > 1 
    }

}

//test Student class
const harry = new Student('H. Potter', 1)
harry.introduceSelf()
harry.canStudyArchery()

