import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Post from './views/Post';

function Routes() {
    return(<>
        <Route exact path="/" component={Home}/>
        <Route exact path="/post/:id" component={Post}/>

    </>);
}

export default Routes;