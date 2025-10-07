import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Edit from "./components/pages/Edit";




function App() {
 



  return (
   <>
    <Routes>
      <Route path="/" element={<RootLayout/>}>
       <Route index element={<Home/>}/> 
       <Route path="/edit" element={<Edit/>}/> 
      
      </Route>
    </Routes>
   </>
  );
}

export default App;
