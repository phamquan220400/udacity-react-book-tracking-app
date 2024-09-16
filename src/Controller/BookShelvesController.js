import BookController from "./BookController";

const BookShelvesController = (props) => {
    return (
        <div className="bookshelf" key={props.shelf.key}>
            <h2 className="bookshelf-title">{props.shelf.value}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <BookController
                        type={props.shelf.value}
                        books={props.books.filter(book => book.shelf === props.shelf.key)}
                        onShelfChange={()=> props.updateBook()}
                    />
                </ol>
            </div>
        </div>
    );
}

export default BookShelvesController;