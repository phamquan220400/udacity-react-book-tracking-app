import {getAll, update} from "../BookAPI";
import {useEffect, useState} from "react";
import BookController from "./BookController";

const BookShelvesController = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getAll().then((result) => setBooks(result));
    }, []);
    let shelfTitleMapping = [
            {
                key: 'currentlyReading',
                value: 'Currently Reading',
            },
            {
                key: 'wantToRead',
                value: 'Want To Read'
            },
            {
                key: 'read',
                value: 'Read'
            }
        ]
    ;
    const handleShelfChange = async (book, shelf) => {
        await update(book, shelf);
        const allBooks = await getAll();
        setBooks(allBooks);
    };
    return (
        shelfTitleMapping.map((shelfTitle) => {
            return (
                <div className="bookshelf" key={shelfTitle.key}>
                    <h2 className="bookshelf-title">{shelfTitle.value}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            <BookController
                                type={shelfTitle.value}
                                books={books.filter(book => book.shelf === shelfTitle.key)}
                                onShelfChange ={handleShelfChange}
                            />
                        </ol>
                    </div>
                </div>
            )
        })

    );
}

export default BookShelvesController;