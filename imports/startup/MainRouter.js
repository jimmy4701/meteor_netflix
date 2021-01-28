import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Landing from '../pages/Landing'
import Signin from '../pages/Signin'
import Navbar from '../components/Navbar'

const MainRouter = () => {

  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Signin} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
  );
}

export default MainRouter;
