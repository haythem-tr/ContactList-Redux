import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Home from './home'
import ContactList from './contactlist'
import AddContact from './addcontact';
import EditContact from './editcontact'

class Routes extends Component {
    
    render() { 
        return ( <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contacts" component={ContactList}/>
            <Route exact path="/addcontact" component={AddContact}/>
            <Route exact path="/editcontact/:_id" render={props=><EditContact _id={props.match.params._id}/>}/>
        </div> );
    }
}
 
export default Routes;

