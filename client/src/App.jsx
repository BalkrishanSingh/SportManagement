import React from 'react';
import {Index} from "./components/index";
import {EquipmentTable} from "./components/EquipmentTable";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";


function App(){
  return(
          <Router>
          <Routes>
          <Route exact path="/" element = {<Index/>}/>
          <Route path="/equipment" element = {<EquipmentTable/>}/>
          </Routes>
          </Router>
          )
}
export default App;