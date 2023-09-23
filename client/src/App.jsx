
import  CarouselTransition from "./components/carousel"
import Home from "./components/acpage"
import Nav from "./components/nav";
import SimpleCard from "./components/ProfileCard";
import AchievementCard from "./components/achivement";
import EquipmentTable from "./components/Eqip";
import ReactDOM from "react-dom/client";

function App(){
  
  return(
    
          <>
          <Nav/> 
           <CarouselTransition/> 
           <SimpleCard/>
          {/*<AchievementCard/>*/}
        {/* <EquipmentTable/> */}
           </>   
  )  
        }

export default App;
