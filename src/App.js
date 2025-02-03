import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component{
  render() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/home" element={<News key="general"  pageSize={5} country="in"  category="general"/>} ></Route>
        <Route exact path="/bussiness" element={<News key="bussiness"  pageSize={5} country="in" category="bussiness"/>}></Route>
        <Route exact path="/entertaintment" eleement={<News  key="entertaintment" pageSize={5} country="in" category="entertaintment"/>}></Route>
        <Route exact path="/general" element={<News key="general"  pageSize={5} country="in" category="general"/>}></Route>
        <Route exact path="/health" element={<News key="health"  pageSize={5} country="in" category="health"/>}></Route>
        <Route exact path="/science" element={<News  key="science" pageSize={5} country="in" category="science"/>}></Route>
        <Route exact path="/sports" element={<News key="sports"  pageSize={5} country="in" category="sports"/>}></Route>
        <Route exact path="/technology" element={<News  key="technology" pageSize={5} country="in" category="technology"/>}></Route>
      </Routes>
      </Router>
    </div>
  )
}
}

