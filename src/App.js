import './App.css';
import Home from './components/Home';
import './components/Home.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
            <Route path="/"> 
                <Home/>
            </Route>
      </Router>
    </div>
  );
}

export default App;
