//Object creation
const person = {
  name: "John",
  age: 30,
   greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};


const employee={
    caltax(){
        console.log("tax rate is 10%");
    }
};

// making prototype
employee.__proto__=person;
employee.greet();

// when object and prototype have same function name, the object function is priqority.
employee