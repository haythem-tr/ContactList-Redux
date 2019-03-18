import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
  
    render() { 
        return ( <div> 
            <h1>ContactList</h1>
           <Link to="/contacts"> <button> Contact List</button></Link>
           <Link to="/addcontact"> <button>Add Contact</button></Link>
            </div> );
    }
}
 
export default Home;