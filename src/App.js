// src/App.js
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import {Switch} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import ReportLitter from './components/ReportLitter';
import AdminDashboard from './components/AdminDashboard';
import CollectorDashboard from './components/CollectorDashboard';
import Schedule from './components/Schedule';
import SpecialPickupRequest from './components/SpecialPickupRequest';

const App = () => {
  return (
    <Router>
      {/* <Switch> */}
      <Routes>
      <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />
        <Route path="/report" Component={ReportLitter} />
        <Route path="/admin" Component={AdminDashboard} />
        <Route path="/collector" Component={CollectorDashboard} />
        <Route path="/schedule" Component={Schedule} />
        <Route path="/special-pickup" Component={SpecialPickupRequest} />
      </Routes>
        
      {/* </Switch> */}
    </Router>
  );
};

export default App;
