// Design a rectangle
// Attributes 1.length 2.width 3.area

// Constructor 
// 1. default constructor which initializes both length and width 1.0
// 2. parameterized constructor which initializes both length and width

// Methods 
// calculateArea() : Computes the area of rectangle
// displayDetails() : Prints the rectangle's details

class Rectangle {
    #length;
    #width;
    #area;
    // constructor() {
    //     this.#length = 1.0
    //     this.#width = 1.0
    // }
    // constructor(length, width) {
    //     this.#length = length;
    //     this.#width = width;
    // }
    // javascript only has single consturctor we need to handle parameterized and non parameterized in a single function
    constructor(length=1.0, width=1.0){
        this.#length = length;
        this.#width = width;
    }
    calculateArea() {
        this.#area = this.#length * this.#width;
        return this.#area.toFixed(2);
    }
    displayDetails() {
        console.log(`Length: ${this.#length}`);
        console.log(`Width: ${this.#width}`);
        console.log(`Area: ${this.calculateArea()}`);
    }
}

rec1 = new Rectangle();
rec1.displayDetails();
rec2 = new Rectangle(12.45, 62.3);
rec2.displayDetails();