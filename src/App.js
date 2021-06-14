import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
import Layout from './components/navbars/Layout';
import Hero from './components/homePage/Hero' 
import HomeBody from './components/homePage/HomeBoby';
//import Carousel from './components/homePage/Carousel'

function App() {
  return (
    
      <Router>
        <div className="App">
          <Switch>
            <Route path="/">
              <Layout />
              <Hero />
              <HomeBody />
            </Route>
          </Switch>
        </div>
      </Router> 
  );
}

export default App;
