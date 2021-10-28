import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About us/About';
import Home from './pages/home/Home';
import Team from './pages/Our team/Team';
import Services from './pages/services/Services';
import Footer from './pages/shared/footer/Footer';
import Header from './pages/shared/header/Header';

function App() {
  return (
    <div>
      <Router>
        {/* header section */}
        <Header></Header>

        {/* switching routers */}
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/service'>
            <Services></Services>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/team'>
            <Team></Team>
          </Route>
        </Switch>
        {/* footer section */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
