import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NewCatto from "./views/NewCatto";
import Home from "./views/Home";
import './App.css';

function App() {
  return (
    <Router>
      <div>
      <header>
        <Link to="/"><h1>Cattodex</h1></Link>
        <Link to="/newcatto" className="button">Add your first catto!</Link>
      </header>
      <main>
        <Switch>
          <Route path="/newcatto">
            <NewCatto />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <footer>Made with <i class="lab la-gratipay"></i> by <a  href="https://github.com/Kekeberto" target="_blank">zeke</a> & <a href="https://github.com/fornielesv"  taget="_blank">iso</a></footer>
    </div>
    </Router>
  );
}

export default App;
