
const tabs=[
    {   _id:'1',
        name:'achref',
        phone:'2323232323',
        email:'wafa@gmail.com'
    },
    {   _id:'2',
        name:'haithem',
        phone:'000000',
        email:'haithem@gmail.com'
    }
]

const ContactReducer=(state=tabs,action)=>{
   
        switch(action.type){
            case 'ADD-CONTACT': return(state.concat(action.newcontact))
            case 'REMOVE-CONTACT': return (state.filter(el=>el._id!==action._id))
            case 'EDIT-CONTACT' : return (state.map(el=>el._id===action.editcontact._id? action.editcontact:el))
            default: return (state)
        }
    
}
export default ContactReducer