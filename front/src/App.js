import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navi from './commponents/Navi/Navi';
import All from './commponents/Employeers/All';
import Add from './commponents/Home/Add';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Navi/>
        <Routes>
       
        <Route path="/all" element={<All />} />
        <Route path="/add" element={ <Add/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
