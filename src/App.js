
import React,{useState} from 'react';
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';


function App() {
  
  const [contacts,setContacts]=useState([])
  const AddContactHandler=(contact)=>{
    console.log(contact)
    setContacts([...contacts,contact])
  }
  return (
    <div className='ui container'>
      <Header/>
      <AddContact AddContactHandler={AddContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
