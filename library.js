let myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937
    },

    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: 1954
    },

    {
        title: "The Silmarillion",
        author: "J.R.R. Tolkien",
        year: 1977
    }
];

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