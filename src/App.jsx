import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nopage from './pages/Nopage';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
      <Routes>
        <Route path="*" element={<Nopage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;
