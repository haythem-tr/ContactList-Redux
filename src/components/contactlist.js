import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import ContactItem from './contactitem'


const tabs=[
    {   _id:'1',
        name:'wafa',
        phone:'2323232323',
        email:'wafa@gmail.com'
    },
    {   _id:'2',
        name:'haithem',
        phone:'000000',
        email:'haithem@gmail.com'
    }
]
class ContactList extends Component {
   
    render() { 
        console.log(this.props.contacts)
        return ( <div className="contactlist">
        {
            
   this.props.contacts.map((el,index)=><ContactItem key={index} item={el}/>)
        }
        <Link to="/"><button>Home</button></Link>
        </div> );
    }
}
 const mapStateToProps=(state)=>{
     return {
         contacts:state.ContactReducer
        }
 }
export default connect(mapStateToProps)(ContactList);