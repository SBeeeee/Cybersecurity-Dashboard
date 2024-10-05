import ContactUsCard from './components/ContactUsCard';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from './components/nav';
import Home from './components/Home';
import Dashboard from './components/dashboard';
function App() {
 
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/' element={<><Home/><div className="mt-96"><ContactUsCard/></div></>}/>
    <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>                
    </BrowserRouter>
  
    </>
  )
}

export default App
