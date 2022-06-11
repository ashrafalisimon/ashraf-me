import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/HomePage/404Page/NotFound';
import Home from './pages/HomePage/Home';
import Footer from './pages/SharedPage/Footer';
import Navbar from './pages/SharedPage/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      <Footer></Footer>

      
    </div>
  );
}

export default App;
