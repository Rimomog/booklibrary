const btn = document.getElementById('btn')
const displayBooks = document.getElementById('displayBooks')
btn.addEventListener('click', addBookToLibrary)
btn.addEventListener('click', displayBook)


let myLibrary = [

]

class Book{
    constructor(title, author, pages, status){
        this.title = title
        this.author = author
        this.pages = pages
        this.status = status
    }

    info() {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`
    }

    readStatus(position) {
        if(this.status === 'Read'){
            this.status = 'Not Read';
       } else{
            this.status = 'Read';
       }
    }
}

function addBookToLibrary() {

    const userBookTitle = document.getElementById('title').value
    const userBookAuthor = document.getElementById('author').value
    const userBookPages = document.getElementById('pages').value
    const userBookStatus = document.getElementById('status').value

    myLibrary.push(new Book(userBookTitle, userBookAuthor, userBookPages, userBookStatus))
}

function displayBook() {
    displayBooks.textContent = "";
    for(let i = 0; i < myLibrary.length; i++){

        let card = document.createElement('div');
        card.className = 'bookCard'
        let para1 = document.createElement('p');
        let para2 = document.createElement('p');
        let para3 = document.createElement('p');
        let para4 = document.createElement('p');
        const pos = i;

        let remove = document.createElement('button');
        remove.innerHTML = 'Remove';
        remove.className = 'remove';

        remove.addEventListener('click', pos => {
            myLibrary.splice(pos, 1);
            displayBook();
        })

        let read = document.createElement('button');
        read.innerHTML = 'Status';
        read.className = 'read'

        read.addEventListener('click', () => {
            myLibrary[pos].readStatus(pos);
            displayBook();
        })


        para1.append(myLibrary[i].title);
        para2.append(myLibrary[i].author);
        para3.append(myLibrary[i].pages);
        para4.append(myLibrary[i].status);

        card.append(para1);
        card.append(para2);
        card.append(para3);
        card.append(para4);
        card.append(remove);
        card.append(read)
        
        displayBooks.appendChild(card)
    }
}


function addClass() {
    var newBook = document.getElementById('userInput');
    newBook.classList.add('status');
}

function removeClass() {
    var newBook = document.getElementById('userInput');
    newBook.classList.remove('status');
}

