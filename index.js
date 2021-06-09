// To-do:
/*

Create the same with the help of classes.
Add a functionality to save the value in local sctorage.
Add a delete button for every Row.

*/
console.log("This is index.js");
// Created a constructor to store values in the object
function getBook(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// Created the constructor to display the books in the table

function display() {}
//
display.prototype.add = function (book) {
  let tableBody = document.getElementById("tableBody");
  let tableString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
  tableBody.innerHTML += tableString;
};
// Implementing the validate function
display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

// Implementing ShowMessage function.
display.prototype.showMessage = function (givenMessage, outputMessage) {
  let message = document.getElementById("message");
  let messageString = `<div class="alert alert-${givenMessage}" role="alert">
                        ${outputMessage}
                       </div>`;
  message.innerHTML = messageString;
  setTimeout(() => {
    message.innerHTML = "";
  }, 2000);
};
// Adding a clear method in prototype of display
display.prototype.clear = function () {
  const libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

//  Adding an event listener to the submit button
const libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", onSubmitLibraryForm);

function onSubmitLibraryForm(e) {
  let bookName = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else {
    type = cooking.value;
  }
  let book = new getBook(bookName, author, type);
  console.log(book);
  let displayBook = new display();
  if (displayBook.validate(book)) {
    displayBook.add(book);
    displayBook.clear();
    displayBook.showMessage("success", "Your books has been added");
  } else {
    displayBook.showMessage(
      "danger",
      "You cannot add books with text field less than two characters"
    );
  }
  e.preventDefault();
}
