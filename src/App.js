import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddRoom from './components/AddRoom/AddRoom';
import MyOrder from './components/MyOrder/MyOrder';
import Footer from './components/Shared/Footer/Footer';
import ManagOrders from './components/ManageOrders/ManagOrders';

function App() {
  return (
    <div>
        <AuthProvider>
        <BrowserRouter>
        <Header></Header>
          <Switch>
          <Route exact path='/'> 
               <Home></Home> 
            </Route>
            <Route exact path='/home'>
               <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/room'>
               <AddRoom></AddRoom>
            </PrivateRoute>
            <PrivateRoute exact path='/myorder'>
               <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute exact path='/manageorder'>
               <ManagOrders></ManagOrders>
            </PrivateRoute>
            <PrivateRoute path='/service/:Id'>
                <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
