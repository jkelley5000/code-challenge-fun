const books = [
    { title: 'The Life of Apples', year: 1995 },
    { title: 'The Life of Kiwis', year: 2005 },
    { title: 'The Life of Oranges', year: 1998 },
    { title: 'The Life of Grapes', year: 2012 }
];

/**
 * Utilized to filter through an array of books and identify books 
 * published before 2000. Then, the titles of those books are pushed
 * into a new array and returned.
 * @param allBooks Array of books. 
 * @returns The titles of books published before 2000.
 */
function getPreMilleniumBookTitles(allBooks) {
    let preMilleniumBooks = [];
    let preMilleniumBookTitles = [];
    preMilleniumBooks = allBooks.filter(book => book.year < 2000);
    preMilleniumBooks.map(book => preMilleniumBookTitles.push(book.title));
    return preMilleniumBookTitles;
}

console.log(getPreMilleniumBookTitles(books));
