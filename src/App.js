import './App.css';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import ShowInfoDetail from './Components/ShowInfoDetail/ShowInfoDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/">
            <Home/>
         </Route>
         <Route path="/club/:idTeam">
            <ShowInfoDetail/>
         </Route>
         <Route path="*">
            <NotFound/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
