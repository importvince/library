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

//add book button opens form
newBook.addEventListener('click', () => {
    form.classList.toggle('open');
    dimmer.classList.toggle('hidden');
});

//add book button adds book
submit.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.toggle('open');
    dimmer.classList.toggle('hidden');
    addBook();
})

const myLibrary =[

]

function Book(title, author, pagecount) {
    this.title = title;
    this.author = author;
    this.pagecount = pagecount;
}

function addBook() {
    let newTitle = title.value;
    let newAuthor = author.value;
    let newPageCount = pages.value;
    console.log(`title = ${newTitle} author = ${newAuthor} pagecount = ${newPageCount}`);

    let addedBook = new Book(newTitle, newAuthor, newPageCount);

    myLibrary.push(addedBook);

    console.log(myLibrary);

    //create child div
    const book = document.createElement('div');
    const bookTitle = document.createElement('span');
    const bookAuthor = document.createElement('span');
    const bookPages = document.createElement('span');
    const remove = document.createElement('button');
    const readIt = document.createElement('button');
    bookTitle.textContent = myLibrary[myLibrary.length -1].title;
    bookAuthor.textContent = myLibrary[myLibrary.length -1].author;
    bookPages.textContent = myLibrary[myLibrary.length -1].pagecount;
    remove.textContent = 'remove book';
    readIt.textContent = "mark as read"

    console.log(book);

    //apply styling
    book.classList.toggle('book');
    remove.classList.toggle('book-buttons');
    readIt.classList.toggle('book-buttons');
    //append children
    book.appendChild(bookTitle);
    book.appendChild(bookAuthor);
    book.appendChild(bookPages);
    book.appendChild(remove);
    book.appendChild(readIt);

    bookShelf.appendChild(book);

    remove.addEventListener('click', () => {
        book.remove();
    })

    readIt.addEventListener('click', () => {
        book.classList.toggle('read-book');
        if (readIt.textContent === "mark as read") {
            readIt.textContent = "mark as unread"
        } else {
            readIt.textContent = "mark as read"
        }

    })
    //current errors:
    //styling is al screwy - grid isn't working
    //no styling applied to checkbox and need to capture that value and mark accordingly once book is created - see instructions

}