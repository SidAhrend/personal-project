import React from 'react';
import './App.css';
import Routes from './routes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AdminLogin from './Components/Admin/Admin';
import AdminHome from './Components/Admin/AdminHome';
import AdminEdit from './Components/Admin/AdminEdit';
import Stripe from './Components/Donate/Stripe';
import {withRouter} from 'react-router-dom';



function App(props) {
  if (props.history.location.pathname === '/stripe'){
    return <Stripe />;
  }
  if (props.history.location.pathname === '/admin-edit'){
    return <AdminEdit />;
  }
  if (props.history.location.pathname === '/admin-login'){
    return <AdminLogin />;
  }
  if (props.history.location.pathname === '/admin-home'){
    return <AdminHome />;
  }
  return (
    <div className="App">
     <Header />
      {Routes}
     <Footer />
    </div>
  );
}

export default withRouter(App);
