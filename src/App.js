import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Header from './pages/shared/header/Header';

function App() {
  return (
    <div>
      <Router>
        {/* header section */}
        <Header></Header>

        {/* switching routers */}
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
        </Switch>
        {/* footer section */}
      </Router>
    </div>
  );
}

export default App;
