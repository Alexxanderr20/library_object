//Adding DOM Selectors for User interaction
const bookCard = document.getElementById("#book-container");
const bookButton = document.getElementById("#book-button");
const addButton = document.getElementById("#add-book-button");
const deleteButton = document.getElementById("#delete-book-button");
const titleInput = document.getElementById("#title-text");
const authorInput = document.getElementById("#author-text");
const pagesInput = document.getElementById("#pages-text");

//creating a empty array to hold books
let myNewLibrary = [];

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

