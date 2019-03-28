import React from 'react';
import Layout from './components/Layout';
import './app.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import './firebase';
import Signin from './components/signin/Signin';

const Routes = (props) => {
  return (
    < >
      <Layout>
         <Switch>
            <Route exact component={Home} path='/' />
            <Route exact component={Signin} path='/signin' />
         </Switch>
      </Layout>
    </>
  );
};

export default Routes;