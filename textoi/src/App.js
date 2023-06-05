import './App.css';
import About from './components/About';
import Form from './components/Form';
import NavBar from './components/NavBar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
            <Routes>

                <Route path="/" element={<Form />} />
                <Route path="/About" element={<About /> }/>
      
            </Routes>
  </BrowserRouter>    
   
  );
}

export default App;
