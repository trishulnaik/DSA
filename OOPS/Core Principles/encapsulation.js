// You are tasked to design a class Book to manage the book details

// Attributes :

// title 
// author
// isAvailable (private).
// Methods :

// Parameterised constructor to initialize the title, author, isAvailable list.
// borrowBook : If the availability status for book 'bookName' is true then the book can be borrowed, Once borrowed mark its status as false. If availability status for book 'bookname' is false then the book is already borrowed by some user and cannot be borrowed until its returned, so print "Book is not available.".
// returnBook : The book with bookName is returned and should be marked as available by setting its available flag to true.
// getAvailability : Prints the availability status of the book with name 'bookName' (true for available , false for unavailable).

class Book {
    title = []
    author = []
    #isAvailable = []
    constructor(title, author, isAvailable) {
        this.title = title
        this.author = author
        this.#isAvailable = isAvailable
    }
    #getBookIndex(bookName){
        return this.title.indexOf(bookName);
    }


    borrowBook(bookName) {
        const bookIndex = this.#getBookIndex(bookName);
        if (bookIndex!==-1) {
            if (this.#isAvailable[bookIndex]) {
                console.log("Book is available to be borrowed");
                this.#isAvailable[bookIndex] = false;
            }
            else {
                console.log("Book is not available");
            }
        }
        else{
            console.log("Book Not found");
        }

    }
    returnBook(bookName) {
        const bookIndex = this.#getBookIndex(bookName);
        if(bookIndex!==-1){
            console.log("Books is returned");
            this.#isAvailable[bookIndex] = true;
        }
        else{
            console.log("Book Not Found");
        }
    }
    getAvailability(bookName){
        const bookIndex = this.#getBookIndex(bookName);
        if(bookIndex!==-1){
            return this.#isAvailable[bookIndex];
        }
        else{
            console.log("Book Not Found")
        }
    }
}

const title = [ "Sherlock_Holmes", "Frankenstein", "King_Arthur_and_the_Round_Table", "Treasure_Island" ];

const author = [ "Arthur_Conan_Doyle", "Mary_Shelley", "Roger_Lancelyn_Green", "Robert_Louis_Stevenson" ];

const isAvailable = [ false, true, false, false];
const bookObj = new Book(title, author, isAvailable);

bookObj.borrowBook("Frankenstein");
bookObj.borrowBook("Sherlock_Holmes");
bookObj.returnBook("King_Arthur_and_the_Round_Table");
console.log(bookObj.getAvailability("Sherlock_Holmes"));
bookObj.borrowBook("Frankenstein");