const BookController = (props) => {
    let books = props.books;
    return (
        books.map((book) => {
            let author = book.authors;
            return (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <img
                                alt={book.title}
                                className="book-cover"
                                style={{
                                    width: 128,
                                    height: 193,
                                }}
                                src={book.imageLinks.smallThumbnail}
                            />
                            <div className="book-shelf-changer">
                                <select onClick={e => props.onShelfChange(book, e.target.value)}>
                                    <option value="none" disabled>
                                        Move to...
                                    </option>
                                    <option value="currentlyReading">
                                        Currently Reading
                                    </option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{author}</div>
                    </div>
                </li>
            );
        })
    );
}

export default BookController;