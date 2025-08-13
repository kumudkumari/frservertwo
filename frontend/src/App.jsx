

import Header from './components/Header/Header.jsx';
import Header1 from './components/Header/Header1.jsx'
import Header2 from './components/Header/Header2.jsx'
import Home from './components/Home/Home.jsx';
import Addevent from './event/Addevent.jsx';
import Navbar from './navbar/Navbar.jsx';

//import './App.css'
function App() {   
  console.log('hi from app')
  return (
    <>
    <h1 className= 'bg-green-500 p-4'>
      React router
    </h1>
  
    <Navbar/>
    <Home/> 
    <Header/>   
    <Header1/>
    <Header2/>
    <Addevent/>  
    
    </>
  )
}
export default App
