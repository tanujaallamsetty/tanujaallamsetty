//import logo from './logo.svg';
import './App.css';
//import DidMount from './DidMount';
//import Classcomponent from './Classcomponents';
//import Learning from './Components/Learning';
//import StatesF from './StatesF';
//import StatesC from './StatesC';
// import StateEx from './StateEx';
//import React from 'react';
import TableComponent from './TableComponent'
// import CardComponent from './CardComponent'
//  import Carousel from 'react-bootstrap/Carousel'
//  import Card from 'react-bootstrap/Card';

//import ReactStrapCp from './ReactStrapCp'
//import UseRef from './UseRef';
 //import LoginForm from './LoginForm';
//import UseEffect from './UseEffect';
//import RegistrationForm from './RegistrationForm';
// import Navbar from './Navbar';
// import Home from './Home';
// import ContactUs from './ContactUs';
//import DidMount from './DidMount';
// import MountNavbar from './MountNavbar';
// import HOME from './Home';
// import ContactUS from './ContactUs';
 //import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
// import ContactUs from './ContactUs';

//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import SPhome from './SPhome';
import SPabout from './SPabout';
import SPnavbar from './SPnavbar';
import React, { Component } from 'react';
import SPfooter from './SPfooter';
import SPheader from './SPheader';
import SPcard from './SPcard';
import SPcontactus from './SPcontactus';
import Registration from './Registration';
import Login from './Login';





// import Routes from 'react-router-dom';





// function App() {
//   return (){
//     <Router>
    
//      <div>

//         {/* <h1>welcome to react learning</h1>
//      <h2>learing react in talaentsprint</h2>
//    <Learning />
//    <Learning  language='react.js' />
//    <Learning  language='angular.js' />
//    <Classcomponent/>
//      */}
//      {/* /* <h1>state Management</h1> */}
//      {/* <Navbar/> 
//      <Home/>
//      <ContactUs/> */}
//      {/* <MountNavbar/> */}
//      {/* <BrowserRouter>
//      <MountNavbar/>
//      <switch>
//       <Routes>
//         <Route path='/' Component={HOME}></Route>
//         <Route path='/' Component={ContactUs}></Route>
//       </Routes>
//      </switch>
//      </BrowserRouter> */}
     
//      <SPnavbar />
//           <Route exact path="/" component={SPhome} />
//           <Route path="/SPabout" component={SPabout} />
//         </div>
      
     


//     </div>
//     </Router>
    
  
    
    
//   );
//     }
    
// }


class App extends React.Component {
 

  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <SPheader />
                
                <SPnavbar />
                <SPhome />
                
                <SPfooter/>
                {/* <SPcontactus/> */}
                <SPcard/>
                {/* <SPabout/> */}
              </div>
            }
          />
          <Route path="/SPabout" element={<SPabout />} />
           <Route path="/SPcontactus" element={<SPcontactus />}/>
           <Route path="/TableComponent" element={<TableComponent/>}/>
           <Route path="/Registration" element={<Registration/>}/>
           <Route path="/Login" element={<Login/>}/>
         
        </Routes>
      </Router>
    );
  }
}

export default App;
