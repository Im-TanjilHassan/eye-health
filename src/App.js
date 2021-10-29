import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contextapi/AuthProvider';
import About from './pages/About us/About';
import Appointment from './pages/Appointment/Appointment';
import Home from './pages/home/Home';
import Login from './pages/login and signup/login/Login';
import SignUp from './pages/login and signup/signUp/SignUp';
import Team from './pages/Our team/Team';
import NotFound from './pages/page not found/NotFound';
import PrivateRoute from './pages/private Route/PrivateRoute';
import ServiceDetail from './pages/services/serviceDetail/ServiceDetail';
import Services from './pages/services/Services';
import Footer from './pages/shared/footer/Footer';
import Header from './pages/shared/header/Header';

function App() {
  return (
    <div>
      <AuthProvider>
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
            <PrivateRoute path='/serviceDetail/:serviceId'>
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/team'>
              <Team></Team>
            </Route>
            <PrivateRoute path='/appointment'>
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* footer section */}
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
