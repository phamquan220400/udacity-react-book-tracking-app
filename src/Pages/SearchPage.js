import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {search,update} from "../BookAPI";
import BookController from "../Controller/BookController";

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query !== '') {
            search(query)
                .then(data => setResults(data));
        }
    }, [query]);
    let validData = (Array.isArray(results) && results.indexOf(results.error) === -1);
    const handleShelfChange = async (book, shelf) => {
        await update(book, shelf).then(
            data => alert('Updated')
        )
    };
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to={"/"} className="close-search"> Close </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={event => setQuery(event.target.value ?? '')}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <div className="list-books-content">
                <ol className="books-grid">
                    {
                        validData ?
                            <BookController
                                books={results}
                                onShelfChange ={handleShelfChange}
                            />
                            : <p>Results will show here</p>
                    }
                </ol></div>
            </div>
        </div>
    )
}

export default SearchPage;