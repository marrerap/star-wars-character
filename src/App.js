import "./App.css";
import CharacterList from "./pages/CharacterList";
import CharacterProfile from "./pages/CharacterProfile";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // getCharacters();

    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/">
            <CharacterList characters={characters} />
          </Route>
          <Route exact path="/character/:id">
            <CharacterProfile characters={characters} />
          </Route>
          {/* <Route path="*">
            <h2>Page not found</h2>
            <Link to="/">Return to Home</Link>
          </Route> */}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
