import React from "react";
import './App.css';
import Header from './Componants/Header/Header';
import Courses from './Componants/Courses/Courses';
import Footer from './Componants/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CoursesGalary from "./Componants/CoursesGalary/CoursesGalary";
import Event from "./Componants/Event/Event";
import Teacher from "./Componants/Teacher/Teacher";
import Blog from "./Componants/Blog/Blog";
import About from "./Componants/About/About";
import Contactus from "./Componants/ContactUs/Contactus";
import PageNotFound from "./Componants/PageNotFound/PageNotFound";
import Slider from "./Componants/Slider/Slider";
import Home from "./Componants/Home/Home";

function App() {
  return (
    <div className="App">

      {/* <div className="container my-5" >
        <Courses></Courses>
      </div> */}

      <Router>
        <Header></Header>
        <Slider></Slider>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/event">
            <Event></Event>
          </Route>
          <Route path="/teachers">
            <Teacher></Teacher>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contactus">
            <Contactus></Contactus>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
