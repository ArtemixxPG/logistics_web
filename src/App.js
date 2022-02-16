import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LocationList from './LocationList';
import ClientEdit from "./ClientEdit";
import DetailEdit from "./DetailEdit";
import DetailList from "./DetailList";
import GFA from "./GFA"



class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' exact={true} element={<Home/>}/>
            <Route path="gfa" element={<GFA/>}/>
          </Routes>
        </BrowserRouter>
    )
  }
}

export default App;