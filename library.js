 let myLibrary = [];

function Book()
{
    // the constructor...
}


function createBook()
{

    let title = prompt("Enter the title of the book: ");
    let author = prompt("Enter the author of the book: ");
    let pages = prompt("Enter the number of pages in the book: ");
    let read = prompt("Enter if you have read the book: ");

    let newBook = new createBook(title, author, pages, read);

    this.info = function()
    {
        console.log(title + " by " + author + ", " + pages + " pages, " + read);
    }

    myLibrary.push(newBook);
}

//const book1 = new createBook('The Hobbit', 'J.R.R. Tolkien', 295, 'Read')
//const book2 = new createBook('The Lord of the Rings', 'J.R.R. Tolkien', 1137, 'Read')
// console.log(book1.info());
// console.log(book2.info());

//let bookshelf = [book1, book2];


function addBookToLibrary()
{
 
}

function displayBook()
{
  const bookshelf = document.getElementById("bookshelf");

  for(let i = 0; i < myLibrary.length; i++)
    {
        let book = document.createElement("div");
        book.classList.add("book");
    
        let bookTitle = document.createElement("h3");
        bookTitle.textContent = myLibrary[i].title;
        book.appendChild(bookTitle);
    
        let bookAuthor = document.createElement("h4");
        bookAuthor.textContent = myLibrary[i].author;
        book.appendChild(bookAuthor);
    
        let bookYear = document.createElement("p");
        bookYear.textContent = myLibrary[i].year;
        book.appendChild(bookYear);
    
        bookshelf.appendChild(book);
    }
}


displayBook();
//addBookToLibrary();