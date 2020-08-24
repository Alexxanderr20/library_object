let myNewLibrary =
[
     bookOne = new bookProp("Harry Potter", "J.K. Rowling" , 624, true),
     bookTwo = new bookProp("It", "Stephen King" , 912, true),
     bookThree = new bookProp("The Da Vinci Code", "Dan Brown" , 200, true)

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
    for(var i = 0; i < myNewLibrary.length; i++)
    {
        console.log(myNewLibrary[i].title);
        console.log(myNewLibrary[i].author);
        console.log(myNewLibrary[i].numOfPages);
        console.log(myNewLibrary[i].haveRead);
    }
}

function readBook()
{

}

//console.log(bookOne.haveRead);
displayBook();