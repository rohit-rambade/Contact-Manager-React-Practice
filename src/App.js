
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';


function App() {
  const contacts=[
    {
      id:"1",
      name:"rohit",
      email:"rohitrambade19@gmail.com"

    },
    {
      id:"2",
      name:"satish",
      email:"satish@gmail.com"

    }
  ]
  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
