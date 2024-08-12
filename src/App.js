import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'/search'} element={<SearchPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
