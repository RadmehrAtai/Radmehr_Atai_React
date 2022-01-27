import './App.css';
import Layout from "./components/Layout";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from "./config/Router"

function App() {
    return (
        <Router>
            <Switch>
                {routes.map((route) => (
                    <Route exact={route.exact} path={route.path}>
                        <Layout>{route.component}</Layout>
                    </Route>
                ))}
            </Switch>
        </Router>
    );
}

export default App;
