import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class AddContact extends Component {
    handlechange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    addcontact=()=>{
        this.props.addContactAction({...this.state,_id:Math.random()*100000})
    }
    render() { 
        return ( <div className="addcontact">
         <h1> Add Contact</h1>
              <input type="text" name="name" onChange={this.handlechange} />
              <input type="text" name="email" onChange={this.handlechange}/>
              <input type="text" name="phone" onChange={this.handlechange} />
               <Link to="/contacts"><button onClick={this.addcontact}>Add</button></Link>
        </div> );
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addContactAction:newcontact=>{
            dispatch({
                type:'ADD-CONTACT',
                newcontact
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(AddContact);