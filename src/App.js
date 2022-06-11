import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/404Page/NotFound';
import Home from './pages/HomePage/Home';
import Footer from './pages/SharedPage/Footer';
import Navbar from './pages/SharedPage/Navbar';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Service from './pages/Service/Service';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      <Footer></Footer>

      
    </div>
  );
}

export default App;
