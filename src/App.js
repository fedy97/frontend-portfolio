import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                {/*<Route path={"/admin/"} element={<Admin/>}></Route>

                */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
