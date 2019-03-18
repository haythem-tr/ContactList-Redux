import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class ContactItem extends Component {
    constructor(props){
        super(props)
        
    }
    removecontact=()=>{
        const {item}=this.props
        this.props.RemoveAction(item._id)
    }
    render() {
        const {item}=this.props 
        return ( <div className='contactitem'>
        <h1>{item.name}</h1>
        <h2> {item.email}</h2>
        <h2>{item.phone}</h2>
        <Link to={`/editcontact/${item._id}`}><button>Edit</button></Link>
        <button onClick={this.removecontact}>Delete</button>
        </div> );
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        RemoveAction:_id=>{
            dispatch({
                type:'REMOVE-CONTACT',
                _id
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(ContactItem);