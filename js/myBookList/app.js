// class book : a represents a book
class Book {
    constructor(name, author, isbn) {
        this.name = name;
        this.author = author;
        this.isbn = isbn;
    }
}
// class UI : display,delete book 
class UI {
    static dispalyBook() {
        const arrBook = [
            {
                name: 'How to stop worrying and start living',
                author: 'Dale Carnegie',
                isbn: '123'
            },
            {
                name: 'Happy',
                author: 'Cameron',
                isbn: '123456'
            }
        ]
        const books = arrBook;
    }
}