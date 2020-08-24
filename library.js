let myNewLibrary =
[
     bookOne = new bookProp("Harry Potter", "J.K. Rowling" , 624, true)
];

function bookProp(title, author, numOfPages, haveRead)
{
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = haveRead;
}

function addNewBook()
{

}

function displayBook()
{

}

function readBook()
{

}

console.log(bookOne.haveRead);