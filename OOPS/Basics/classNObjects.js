// Practice to understand classes and objects

// Create a Student class
// Class Attributes - name , rollnumber
// Methods - setDetails(): set the name and rollnumber, displayDetails()

class Student{
    name;
    rollNumber;
    setDetails(name , rollnumber){
        this.name = name;
        this.rollNumber = rollnumber;
    }
    displayDetails(){
        console.log(`Hi ${this.name}, your rollnumber is ${this.rollNumber}`);
    }
}

const trishul = new Student();
const rahul = new Student();

// setting details
trishul.setDetails("Trishul", 1);
rahul.setDetails("Rahul", 2);

// getting details
trishul.displayDetails();
rahul.displayDetails();

