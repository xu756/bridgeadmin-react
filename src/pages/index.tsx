import routes from "../routes/routes";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


export default function Index() {
    return (
        <Router>
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element}/>
                ))}
            </Routes>
        </Router>
    );
};

