import { EquipmentTable } from './components/EquipmentTable'
import { useState,useEffect } from "react";

function App() {
  const [EquipmentData,SetEquipmentData] = useState([{}])  
  useEffect(() => {
    fetch("/equipment",
    {'method' : "GET",
    headers: {
      "Content-Type": 'Application/json'
    }}).then(resp => resp.json())
    .then(resp => {SetEquipmentData(resp)})
    .catch(err => console.log("Error"))
  }, [])
  
  return (
    <div>
      <EquipmentTable EquipmentData = {EquipmentData}> 
      </EquipmentTable>
    </div>
  )
}

export default App
