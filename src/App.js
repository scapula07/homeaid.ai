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
import TaskerCalender from './pages/Tasker/calender';
import TaskerSkills from './pages/Tasker/skills';
import PaymentAccount from './pages/Tasker/account';
import Detailing from './pages/Tasker/detailing';
import Dashboard from './layout/dashboard';
import TaskerDashboard from './pages/TaskerDashboard';
import Overview from './pages/TaskerDashboard/dashboard';
import Tasks from './pages/TaskerDashboard/tasks';
import ReviewSection from './pages/TaskerDashboard/reviews';
import Messages from './pages/TaskerDashboard/messages';
import Settings from './pages/TaskerDashboard/Settings';
import ProfileSettings from './pages/TaskerDashboard/Settings/profile';
import SkillSettings from './pages/TaskerDashboard/Settings/skills';
import ScheduleSettings from './pages/TaskerDashboard/Settings/schedule';






function App() {
  return (
    <div className="App">
      
         <Routes>
            
              <Route exact path="/"  element={ <Layout ><LandingPage  /></Layout>} />
              <Route exact path="/ask"  element={<Layout ><Ask  /></Layout>} />
              <Route exact path="/signup"  element={<Layout ><SignUp  /></Layout>} />
              <Route exact path="/signin"  element={<Layout ><SignIn /></Layout>} />
              
              
              <Route exact path="/ask-"  element={<Layout ><AskPages   /></Layout>} >
            
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
            <Route exact path="/become-tasker"  element={<Layout ><BecomeTasker /></Layout>} />

            <Route exact path="/become-tasker-"  element={<Layout ><Tasker  /></Layout>} >
                <Route exact path=""  element={<Detailing />} />
                <Route exact path="acount-setup"  element={<PaymentAccount  />} />
                <Route exact path="works"  element={<TaskerSkills/>} />
                <Route exact path="schedule-setup"  element={<TaskerCalender/>} />
            </Route>

             <Route exact path="/dashboard"  element={ < Dashboard ><TaskerDashboard /></ Dashboard >} >
                <Route exact path=""  element={<Overview/>} />
                <Route exact path="reviews"  element={<ReviewSection />} />
                <Route exact path="tasks"  element={<Tasks />} />
                <Route exact path="messages"  element={<Messages/>} />
                <Route exact path="settings"  element={<Settings/>} >
                  <Route exact path=""  element={<ProfileSettings />} />
                  <Route exact path="skills"  element={<SkillSettings />} />
                  <Route exact path="schedule"  element={<ScheduleSettings  />} />
                 </Route>
              </Route>
          </Routes>
         
     </div>
  );
}

export default App;
