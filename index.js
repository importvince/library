//grab form and button elements
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const submit = document.getElementById('submit');
const login = document.getElementById('login');
const newBook = document.getElementById('new-book');
const form = document.getElementById('form-container');
const bookShelf = document.getElementById('book-container');

//add book button opens form
newBook.addEventListener('click', () => {
    form.classList.toggle('open');
});

//add book button adds book
submit.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.toggle('open');
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

    for (let i = 0; i<myLibrary.length; i++) {
        //create child div
        const book = document.createElement('div');
        const bookTitle = document.createElement('span');
        const bookAuthor = document.createElement('span');
        const bookPages = document.createElement('span');
        bookTitle.textContent = myLibrary[i].title;
        bookAuthor.textContent = myLibrary[i].author;
        bookPages.textContent = myLibrary[i].pagecount;

        console.log(book);

        //apply styling
        book.classList.toggle('book');

        //append children
        book.appendChild(bookTitle);
        book.appendChild(bookAuthor);
        book.appendChild(bookPages);

        bookShelf.appendChild(book);
    }

    //current errors:
    //making the same div twice every run (need to only add newest div, or last item in myLibrary)
    //styling is al screwy
}