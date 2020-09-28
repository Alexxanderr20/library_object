//Adding DOM Selectors for User interaction
const bookCard = document.getElementById("book-container");
const bookButton = document.getElementById("book-button");
const addButton = document.getElementById("add-book-button");
const clearButton = document.getElementById("clear-book-button");
const titleInput = document.getElementById("title-text");
const authorInput = document.getElementById("author-text");
const pagesInput = document.getElementById("pages-text");
//const readInput = document.getElementById("")


//creating a empty array to hold books
let myNewLibrary = [];

// function defaultBooks()
// {
//     var bookOne = new book("Harry Potter", "J.K. Rowling" , 624, true);
//     var bookTwo = new book("It", "Stephen King" , 912, true);
//     var bookThree = new book("The Da Vinci Code", "Dan Brown" , 200, true);

//     console.log(bookOne);
//     console.log(bookTwo);
//     console.log(bookThree);
// }

     function book(title, author, numOfPages, haveRead)
    {
        this.title = title;
        this.author = author;
        this.numOfPages = numOfPages;
        this.read = haveRead;
    }

function addNewBookToLibrary(name, author, pages, readStatus)
{
    let books = new book(name,author, pages, readStatus);
    myNewLibrary.push(books);
}

function clearBooks()
{
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";

// displayBook();

defaultBooks();