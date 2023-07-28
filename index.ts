import * as readlineSync from 'readline-sync'

// Assignment 3: Building an Interactive CLI Book Management App using Typescript

type Book = {
    title: string,
    author: string,
    ISBN: string
};

let books: Book[] = [];

// Adding a book:
function addBook() {
    const title = readlineSync.question('Enter book title: ');
    const author = readlineSync.question('Enter book author: ');
    const ISBN = readlineSync.question('Enter book ISBN: ');

    const newBook: Book = {
        title, ISBN, author
    }

    books.push(newBook);

    console.log(`Book ${title} added successfully`);
}
// Viewing a book
function viewBooks() {
    if (books.length === 0) {
        console.log('No books in the library.');
    } else {
        for (let book of books) {
            console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`)
        }
    }
}

// Deleting a book
function deleteBook() {
    const ISBN = readlineSync.question('Enter the ISBN of the book you want to delete: ');

    const index = books.findIndex(book => book.ISBN === ISBN );
    console.log(index);

    if (index !== -1 ) {
        books.splice(index, 1);
        console.log( 'Book deleted successfully');

    } else {
        console.log ('Book not found');

    }
}

function mainMenu() {
    let shouldExit = false;

    while (!shouldExit) {
        console.log('1. Add book \n2. View books \n3. Delete book \n4. Exit');

        const option = readlineSync.question('Choose an option: ');

        switch (option) {
            case '1':
                addBook();
                break;
            case '2':
                viewBooks();
                break;
            case '3':
                deleteBook();
                break;
            case '4':
                shouldExit = true;
                break;
            default:
                console.log('Invalid option. Please try again.');
        }
    }
}

mainMenu();