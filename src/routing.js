import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import User from './components/users';
import  UserDetail  from './components/userDetails';
class Routing extends Component {
    componentDidMount() {
        console.log("hello routing");
    }
render(){

    return(
       <Router>
           <Route path="/" exact={true} component={User}></Route>
           <Route path="/userdetail/:id" exact={true} component={UserDetail}></Route>
       </Router>
    )
}
}


export default Routing;
