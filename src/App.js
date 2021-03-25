import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import BlogListPage from "./pages/blog/List";
import SingleBlogPage from "./pages/blog/Single";

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
                <Link to="/posts">Articles</Link>
              </li>
              <li>
                <Link to="/">Connexion</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/posts">
              <BlogListPage/>
            </Route>
            <Route path="/post/:id">
              <SingleBlogPage/>
            </Route>
            <Route path="/">

            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
