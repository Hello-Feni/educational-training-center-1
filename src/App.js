import './App.css';
import Home from './component/Home/Home/Home';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Dashboard from './component/Dashboard/Registration/Dashboard';
import Book from './component/Dashboard/Book/Book';
import BookList from './component/Dashboard/BookList/BookList';
import Review from './component/Dashboard/Review/Review';
import Admin from './component/Admin/Admin/Admin';
import RegisterList from './component/Admin/RegisterList/RegisterList';
import AddCourse from './component/Admin/AddCourse/AddCourse';
import MakeAdmin from './component/Admin/MakeAdmin/MakeAdmin';
import ManageCourse from './component/Admin/ManageCourse/ManageCourse';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import SignUp from './component/Login/SignUp/SignUp';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
          <Route  path="/about">
            <Home></Home>
          </Route>

          <Route path="/Login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/Registration">
            <Book></Book>
          </Route>
          <Route path="/Registration-list">
            <BookList></BookList>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
        
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/Register-list">
            <RegisterList></RegisterList>
          </Route>
          <Route path="/Add-Course">
            <AddCourse></AddCourse>
          </Route>
          <Route path="/Make-Admin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/Manage-Course">
            <ManageCourse></ManageCourse>
          </Route>
          <Route path="/SignUp">
            <SignUp></SignUp>
          </Route>
          <Route  path="/">
           <Home></Home>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
    
  );
}

export default App;
