import { Index } from "./components/Index";
import { EquipmentTable } from "./components/EquipmentTable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AthleteTable } from "./components/AthleteTable";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/equipment" element={<EquipmentTable />} />
        <Route path="/athletes" element={<AthleteTable />} />
      </Routes>
    </Router>
  );
}
export default App;
