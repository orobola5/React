 import Login from "./views/authentication/Login";
import "./App.css"
import Register from "./views/authentication/Register";
import { Routes,Route } from "react-router-dom";
import Dashboard from "./views/dashboard/Dashbord";

const App=()=>{
  return(
    <div className="app">
     
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard/*" element={<Dashboard/>}/>
        </Routes>
      
  
    </div>
  )

}
export default App