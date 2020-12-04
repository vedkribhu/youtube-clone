import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Recomendations from "./Recommendatins.js"
import Searchpage from "./Searchpage"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>

          <Route path="/search/:searchTerm">
            <div className="app__page">
                <Sidebar/>
                <Searchpage/>
              </div> 
          </Route>



          <Route path="/">

            <div className="app__page">
              <Sidebar/>
              <Recomendations/>
            </div>        
          </Route>



        </Switch>
    </Router>
    </div>
  );
}

export default App;
