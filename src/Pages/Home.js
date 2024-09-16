import BookShelvesController from "../Controller/BookShelvesController";
import {Link} from "react-router-dom";
import * as API from "../BookAPI";
import {useEffect, useState} from "react";

const Home = () => {
    const shelfTitleMapping = [
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
    const [books, setBooks] = useState([]);
    useEffect(() => {
        updateBook();
    }, []);
    const updateBook = () => {
        return API.getAll().then(data => setBooks(data));
    }
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {shelfTitleMapping.map((shelf) => {
                         return <BookShelvesController
                            shelf={shelf}
                            books={books}
                            updateBook={() => updateBook()}/>
                    })}
                </div>
            </div>
            <div className="open-search">
                <Link to={"/search"}>Add a book</Link>
            </div>
        </div>
    );
}

export default Home;