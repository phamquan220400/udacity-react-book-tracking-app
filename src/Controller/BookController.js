const BookController = (props) => {
    let books = props.books;
    return (
        books.map((book) => {
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
                                <select>
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
                        <div className="book-title">To Kill a Mockingbird</div>
                        <div className="book-authors">Harper Lee</div>
                    </div>
                </li>
            );
        })
    );
}

export default BookController;