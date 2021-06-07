import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
import Layout from './components/navbars/Layout';

function App() {
  return (
    
      <Router>
        <div className="App">
          <Switch>
            <Route path="/">
              <Layout />
            </Route>
          </Switch>
        </div>
      </Router> 
  );
}

export default App;
