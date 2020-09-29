//Adding DOM Selectors for User interaction
const bookCard = document.getElementById("book-container");
const bookButton = document.getElementById("book-button");
const addButton = document.getElementById("add-book-button");
const clearButton = document.getElementById("clear-book-button");
const titleInput = document.getElementById("title-text");
const authorInput = document.getElementById("author-text");
const pagesInput = document.getElementById("pages-text");
//const readInput = document.getElementById("")

//Creating Event Listeners
clearButton.addEventListener("click", clearButton);
//creating a empty array to hold books
let myNewLibrary = [];

     function book(title, author, numOfPages, haveRead)
    {
        this.title = title;
        this.author = author;
        this.numOfPages = numOfPages;
        this.read = haveRead;
    }

    function getNewBook()
    {
        const bookTitle = titleInput.value;
        const authorName = authorInput.value;
        const pageNumber = pagesInput.value;
        myNewLibrary.push(new book(title, author, numOfPages, haveRead));
    }

// function addNewBookToLibrary()
// {
//     let books = new book(name,author, pages, readStatus);
//     myNewLibrary.push(books);
// }

function clearBooks()
{
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
}
// displayBook();


function addNewBook()
{

}

clearBooks();