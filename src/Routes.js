import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './views/Home';
import Post from './views/Post';
import Signup from  './views/Signup';
import Login from './views/Login';
import Create from './views/Create';
import Update from './views/Update';

function Logout(){
    sessionStorage.removeItem('blogToken');
    console.log('Entre al logout');
    return <Redirect to="Login"/>
}

function Routes() {
    return(<>
        <Route exact path="/" component={Home}/>
        <Route exact path="/create" component={Create}/>
        <Route exact path= "/post/:id" component = { Post }/>
        <Route exact path= "/update/:id" component = { Update }/>
        <Route exact path= "/signup" component = { Signup }/>
        <Route exact path="/logout" component={Logout}/>
        <Route exact path="/login" component = { Login }/>
    </>);
}

export default Routes;