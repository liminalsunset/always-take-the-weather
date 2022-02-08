const books = [
    {
        title: 'Neuromancer',
        author: 'Gibson'
    },
    {
        title: 'Snow Crash',
        author: 'Stephenson'
    }
];

const getTheTitles = function(books) {
    return books.map(book => book.title);
};

console.log(getTheTitles(books));