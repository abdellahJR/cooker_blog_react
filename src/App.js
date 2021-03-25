import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/authentification/Login';
import Register from './pages/authentification/Register';
import ForgotPassword from './pages/authentification/ForgotPassword';
import './App.css';
import ListBlog from "./pages/admininistration/ListBlog";
import EditBlog from "./pages/admininistration/EditBlog";
import CreateBlog from "./pages/admininistration/CreateBlog";

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/">Articles</Link>
              </li>
              <li>
                <Link to="/">Connexion</Link>
              </li>
              <li>
                <Link to="/admin/blog">Administration</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/forgotpassword">
              <ForgotPassword />
            </Route>
            <Route exact path="/admin/blog">
              <ListBlog />
            </Route>
            <Route path="/admin/blog/:id/edit">
              <EditBlog />
            </Route>
            <Route path="/admin/blog/create">
              <CreateBlog />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
