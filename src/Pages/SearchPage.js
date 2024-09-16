import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {search, getAll} from "../BookAPI";
import BookController from "../Controller/BookController";

const SearchPage = () => {
    const [query, setQuery] = useState(null);
    const [results, setResults] = useState(null);
    useEffect(() => {
        if (query && query.length > 0) {
            search(query).then(resultData => {
                    if(!resultData.error){
                        getAll().then(allData => {
                            const newData = resultData.map((dataItem) => {
                                const book = allData.find(item => item.id === dataItem.id);
                                let bookShelf = book ? book.shelf : 'none';
                                return {...dataItem, shelf:bookShelf};
                            });
                            setResults([...newData]);
                        });
                    } else {
                        setResults([]);
                    }
                })
        } else {
            setResults([]);
        }
    }, [query]);
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
                        (results && (results.length > 0)) ?
                            <BookController
                                books={results}
                            />
                            : <p>Results will show here</p>
                    }
                </ol></div>
            </div>
        </div>
    )
}

export default SearchPage;