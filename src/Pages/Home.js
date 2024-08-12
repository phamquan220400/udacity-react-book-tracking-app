import BookShelvesController from "../Controller/BookShelvesController";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelvesController/>
                </div>
            </div>
            <div className="open-search">
                <Link to={"/search"}>Add a book</Link>
            </div>
        </div>
    );
}


export default Home;