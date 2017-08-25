import React from  'react';
import App from './components/App';
import {Route, IndexRoute} from 'react-router';
//import auth from './auth/authenticator';

export default(
    <Route path="/" component={App}></Route>
);

/* function requireAuth(nextState,replace){
    console.log(auth.loggedIn());
    if(!auth.loggedIn){
        replace({
            path:'/login',
            state:{ nextPathname:nextState.location.pathname}
        });
    }
    <Route path="/login" component={LogInPage} />
    <Route path="/cats" component={CatsPage} onEnter={requireAuth}>
      <Route path="/cats/new" component={NewCatPage} />
      <Route path="/cats/:id" component={CatPage} />
    </Route>
    <Route path="/about" component={AboutPage} />
  </Route>
} */
