const books = [
    { id: 1, title: "The Great King", author: "Scott Blue", year: 1925 },
    { id: 2, title: "To Kill the Ignorance", author: "Harper Lee", year: 1960 },
    { id: 3, title: "New dawn", author: "John News", year: 2003},
    { id: 4, title: "Pride and Prejudice", author: "Jane Austine", year: 1813 }
    ];
    const bookSummaries = books.map((book) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - book.year;
    let summary = `${book.title} by ${book.author}`;
    if (age >= 100) {
    summary += " (Classic)";
    } else {
    summary += " (Modern)";
    }
    return {
    id: book.id,
    title: book.title,
    author: book.author,
    year: book.year,
    age: age,
    summary: summary
    };
    });
    console.log(bookSummaries);