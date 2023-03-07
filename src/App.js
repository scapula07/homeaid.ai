import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes,Route,BrowserRouter as Router } from "react-router-dom"
import LandingPage from './pages/LandingPage';
import Layout from './layout';
import Ask from './pages/Ask';
import AskPages from './pages/AskSubPages';
import Query from './pages/AskSubPages/query';
import PersonnalDetails from './pages/AskSubPages/personnalDetails';
import Scheduler from './pages/AskSubPages/Scheduler';
import Skills from './pages/AskSubPages/Scheduler/ServiceProvider/skills';
import Schedule from './pages/AskSubPages/Scheduler/ServiceProvider/schedule';
import Reviews from './pages/AskSubPages/Scheduler/ServiceProvider/reviews';
import ServiceProvider from './pages/AskSubPages/Scheduler/ServiceProvider';
import Booking from './pages/AskSubPages/Scheduler/Booking';
import CardPayment from './pages/AskSubPages/Scheduler/Booking/card';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BecomeTasker from './pages/BecomeTasker';
import Tasker from './pages/Tasker';

function App() {
  return (
    <div className="App">
        <Layout >
         <Routes>
            
              <Route exact path="/"  element={<LandingPage  />} />
              <Route exact path="/ask"  element={<Ask  />} />
              <Route exact path="/signup"  element={<SignUp  />} />
              <Route exact path="/signin"  element={<SignIn />} />
              
              
              <Route exact path="/ask-"  element={<AskPages   />} >
            
                <Route exact path=""  element={<Query  />} />
                
                <Route exact path="detailing"  element={<PersonnalDetails   />} />
                  <Route exact path="scheduler"  element={<Scheduler  />} >
                  
                    
                  </Route> 

                    <Route exact path="scheduler-provider" element={<ServiceProvider  />}>
                        <Route exact path=""  element={<Skills  />} />
                        <Route exact path="set"  element={<Schedule  />} />
                        <Route exact path="reviews"  element={<Reviews  />} />
                    </Route>

                    <Route exact path="scheduler-booking" element={<Booking   />}>
                        <Route exact path=""  element={<CardPayment  />} />
                        
                    </Route>

               
            </Route>
            <Route exact path="/become-tasker"  element={<BecomeTasker />} />

            <Route exact path="/become-tasker-"  element={<Tasker  />} >
            </Route>
          </Routes>
          </Layout>
     </div>
  );
}

export default App;
