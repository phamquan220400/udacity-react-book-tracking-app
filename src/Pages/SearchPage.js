import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import * as BookAPI from "../BookAPI";

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        BookAPI.search(query, 12).then((searchResults) => setResults(searchResults))
    }, []);
    
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
                <ol className="books-grid">

                </ol>
            </div>
        </div>
    )
}

export default SearchPage;