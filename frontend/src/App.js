import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './Components/Navbar/Nav';
import Home from './Components/Home/Home';
import CurrentMovies from './Components/Listings/CurrentMovies';
import UpcomingMovies from './Components/Listings/UpcomingMovies';
import Tickets from './Components/TicketBooking/Tickets';
import Screens from './Components/Information/Screens';
import OpeningTimes from './Components/Information/OpeningTimes';
import Forum from './Components/Information/Forum';
import ContactUs from './Components/Information/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import About from './Components/Information/About';
import './Resources/App.css';
import Directions from './Components/Information/Directions/Directions'
import Nearby from './Components/Information/Nearby/Nearby'
import ReleasedMovie from './Components/Listings/ReleasedMovie';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>

          <Route path="/Home" >
            <Home />
          </Route>

          <Route path="/CurrentMovies" >
            <CurrentMovies />
          </Route>

          <Route path="/released/:movie" >
            <ReleasedMovie />
          </Route>

          <Route path="/UpcomingMovies" >
            <UpcomingMovies />
          </Route>

          <Route path="/upcoming/:movie" >
            <ReleasedMovie />
          </Route>

          <Route path="/Tickets" >
            <Tickets />
          </Route>

          <Route path="/Screens" >
            <Screens />
          </Route>

          <Route path="/OpeningTimes" >
            <OpeningTimes />
          </Route>

          <Route path="/Forum" >
            <Forum />
          </Route>

          <Route path="/ContactUs">
            <ContactUs />
          </Route>

          <Route path="/About" >
            <About />
          </Route>

          <Route path="/Directions" >
            <Directions />
          </Route>

          <Route path="/Nearby" >
            <Nearby />
          </Route>

        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
