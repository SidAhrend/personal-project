import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About-Us/About-Us";
import Involved from './Components/Get-Involved/Get-Involved';
import Donate from './Components/Donate/Donate';
import AdoptHome from './Components/Adopt/Adopt-Home';
import AdminLogin from './Components/Admin/Admin';
import AdminEdit from './Components/Admin/AdminEdit';
import AdoptDogs from './Components/Adopt/adopt pages/Dog-Adoption';
import AdoptCats from './Components/Adopt/adopt pages/Cat-Adoption';
import IndivDog from './Components/Adopt/adopt pages/Individual-dogs';
import IndivCat from './Components/Adopt/adopt pages/Individual-Cats';
import Stripe from './Components/Donate/Stripe';

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/contact" component={Contact} />
    <Route path="/about-us" component={About} />
    <Route path="/get-involved" component={Involved} />
    <Route path="/donate" component={Donate} />
    <Route path="/adopt-home" component={AdoptHome} />
    <Route path="/admin-login" component={AdminLogin} />
    <Route path="/adopt-dogs" component={AdoptDogs} />
    <Route path="/adopt-cats" component={AdoptCats} />
    <Route path="/adopt-dog/:id" component={IndivDog} />
    <Route path="/adopt-cat/:id" component={IndivCat} />
    <Route path="/admin-edit" component={AdminEdit} />
    <Route path="/stripe" component={Stripe} />

  </Switch>
);
