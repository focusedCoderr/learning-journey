function Library(){
    this.books = [];
}

Library.prototype.addBook = function(book){
    this.books.push(book);
}

Library.prototype.findBook = function(title){
   return this.books.includes(title) ? "Book found" : "Book not found";
}

const a = new Library();
a.addBook("Harry Potter");
a.addBook("The Hobbit");

console.log(a.findBook("Harry"));