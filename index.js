//grab form and button elements
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const submit = document.getElementById('submit');
const login = document.getElementById('login');
const newBook = document.getElementById('new-book');
const form = document.getElementById('form-container');
const bookShelf = document.getElementById('book-container');
const dimmer = document.getElementById('dimmer');
const checkbox = document.getElementById('read');

//add book button opens form
newBook.addEventListener('click', () => {
    form.classList.toggle('open');
    dimmer.classList.toggle('hidden');
    isChecked = 0;
});

//add book button adds book
submit.addEventListener('click', (e) => {
    e.preventDefault();
    let validate = validateForm();
    if (validate == false) {
        return false
    }
    form.classList.toggle('open');
    dimmer.classList.toggle('hidden');
    addBook();
    clearCheckbox();
})

//validate form - mimics the required attribute of an input, but that wasn't working for me which i suspect is due to preventDefault
function validateForm() {
    if (title.value == "" || author.value == ""|| pages.value == "") {
        alert("Please fill out all book details!")
        return false;
    } 
    return true;
}


//set a baseline for checkbox where 0 = unchecked (unread book) and 1 = checked (read book)
let isChecked = 0;
//add behavior back to checkbox since preventDefault in the submit event listener removed this
checkbox.addEventListener('change', () => {
    isChecked += 1;
    console.log('checkbox: ' + isChecked)
})
//create a way for checkbox to get cleared upon submit
function clearCheckbox() {
    checkbox.checked = false;
}

const myLibrary =[

]

//constructor for book objects
function Book(title, author, pagecount) {
    this.title = title;
    this.author = author;
    this.pagecount = pagecount;
}

//building the book
function addBook() {
    let newTitle = title.value;
    let newAuthor = author.value;
    let newPageCount = pages.value;
    console.log(`title = ${newTitle} author = ${newAuthor} pagecount = ${newPageCount}`);

    let addedBook = new Book(newTitle, newAuthor, newPageCount);

    //track books within our library array so we can find them and delete them 
    myLibrary.push(addedBook);

    console.log(myLibrary);

    //create child div aka the book and the elements within the book
    const book = document.createElement('div');
    const bookTitle = document.createElement('span');
    const bookAuthor = document.createElement('span');
    const bookPages = document.createElement('span');
    const remove = document.createElement('button');
    const readIt = document.createElement('button');

    //grab the info from the last object in our array
    bookTitle.textContent = myLibrary[myLibrary.length -1].title;
    bookAuthor.textContent = myLibrary[myLibrary.length -1].author;
    bookPages.textContent = myLibrary[myLibrary.length -1].pagecount;

    //set initial text content for buttons in book element
    remove.textContent = 'remove book';
    if (isChecked == true) {
        readIt.textContent = "mark as unread"
    } else {
        readIt.textContent = "mark as read"
    };

    console.log(book);

    //apply styling
    book.classList.toggle('book');
    if (readIt.textContent == "mark as unread") {
        book.classList.toggle('read-book')
    };
    remove.classList.toggle('book-buttons');
    readIt.classList.toggle('book-buttons');
    
    //append children
    book.appendChild(bookTitle);
    book.appendChild(bookAuthor);
    book.appendChild(bookPages);
    book.appendChild(remove);
    book.appendChild(readIt);

    //append book to the book container
    bookShelf.appendChild(book);

    //give remove button the ability to remove the child we just created
    remove.addEventListener('click', () => {
        book.remove();
    })

    readIt.addEventListener('click', () => {
        book.classList.toggle('read-book');
        isChecked = 0;
        if (readIt.textContent === "mark as read") {
            readIt.textContent = "mark as unread"
        } else {
            readIt.textContent = "mark as read"
        }
        console.log('book button: ' + isChecked);

    })
    //current errors:
    //no styling applied to checkbox

}