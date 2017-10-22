const pd = require("probability-distributions");

let factor = 1000;
let no_books = 100 * factor;
let no_users = 10000 * factor;
let max_books = 1 * factor;

function randomBooks(max) {
    let books = [ ];
    let user_books = pd.ruf(1)[0]
    user_books = user_books <= 0 ? 1 : user_books;
    user_books = user_books > max ? max : user_books;
    for (let j = 0; j < user_books; j++) {
        books.push(Math.floor(Math.random() * no_books));
    }
    return books;
}

for (let i = 0; i < no_users; i++) {
    let user = {
        id : i,
        books: randomBooks()
    }
    console.log(JSON.stringify(user));
}
