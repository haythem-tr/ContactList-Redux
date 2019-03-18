import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class EditContact extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            phone:""
        }
    }
    handlechange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    componentDidMount(){
        this.setState({...this.props.contacts.filter(el=>el._id===this.props._id)[0]
            
        })
    }
    editcontact=()=>{
        this.props.EditAction({...this.state})
    }
   
    render() { 
        return ( <div className="addcontact">
         <h1> Edit Contact</h1>
              <input type="text" name="name" value={this.state.name} onChange={this.handlechange} />
              <input type="text" name="email" value={this.state.email} onChange={this.handlechange}/>
              <input type="text" name="phone" value={this.state.phone} onChange={this.handlechange} />
              <Link to="/contacts"> <button onClick={this.editcontact}>Edit</button></Link>
        </div> );
    }
}
 const mapStateToProps=(state)=>{
     return {
         contacts:state.ContactReducer
     }
 }
 const mapDispatchToProps=(dispatch)=>{
     return{
         EditAction:editcontact=>{
             dispatch({
                 type:'EDIT-CONTACT',
                 editcontact
             })
         }
     }
 }
export default connect(mapStateToProps,mapDispatchToProps)(EditContact);