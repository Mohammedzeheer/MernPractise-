class Person {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log('My name is ' + this.name);
    }
}

class Student extends Person {
    constructor(name, studentId) {
        super(name);
        this.studentId = studentId;
    }

    study() {
        console.log(this.name + ' is studying.');
    }
}


const s=new Person('abdul')
const c=new Student(3)
s.sayName('abdul')
c.study()