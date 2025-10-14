import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Edit from "./components/pages/Edit";
import Todo from "./components/layouts/Todo";




function App() {
 



  return (
   <>
    <Routes>
      <Route path="/" element={<RootLayout/>}>
       <Route index element={<Home/>}/> 
       <Route path="/edit/:id" element={<Edit/>}/>
       <Route path="/todo" element={<Todo/>}/> 
      
      </Route>
    </Routes>
   </>
  );
}

export default App;
