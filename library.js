/*
    Edward Alexander Muñoz
*/


//Adding DOM Selectors for User interaction
const bookCard = document.querySelector("#book-container");
const bookButton = document.querySelector("#book-button");
const addButton = document.querySelector("#add-book-button");
const deleteButton = document.querySelector("#delete-book-button");
const titleInput = document.querySelector("#title-text");
const authorInput = document.querySelector("#author-text");
const pagesInput = document.querySelector("#pages-text");
const readInput = document.querySelector("#read-book-button");


//creating a empty array to hold books
let myNewLibrary = [];


//creating Event Listeners
addButton.addEventListener("click", addNewBookToLibrary);

class Book
{
    constructor(title, author, numOfPages, haveRead)
        {
            this.title = title,
            this.author = author,
            this.pages = numOfPages,
            this.read = haveRead;
        }
}

function addNewBookToLibrary(e)
{
    let bookTitle = titleInput.value;
    let authorName = authorInput.value;
    let numOfPages = pagesInput.value;
    let haveRead = readInput.value;

    let book = new Book(bookTitle, authorName, numOfPages, haveRead);
    myNewLibrary.push(book);
}


console.log(myNewLibrary);
