import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/SignUp/SignUp/SignUp';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Aboutus from './Pages/Home/AboutUs/Aboutus';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import AllProducts from './Pages/AllProducts/AllProducts';
import MainBorad from "./Pages/Dashboard/ManiBoard/MainBorad";
import NotFound from "./Pages/NotFound/NotFound";


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route  path = "/home">
            <Home></Home>
          </Route>
          <Route  path = "/products">
            <AllProducts></AllProducts>
          </Route>
          <PrivateRoute path = "/mainboard">
            <MainBorad></MainBorad>
          </PrivateRoute>
          <Route path = "/aboutus">
            <Aboutus></Aboutus>
          </Route>
          <PrivateRoute path = "/purchase/:productId">
          <Purchase></Purchase>
          </PrivateRoute>
          <Route path = "/login">
           <Login></Login>
          </Route>
          <Route path = "/signup">
           <SignUp></SignUp>
          </Route>
          <Route path = "*">
           <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
