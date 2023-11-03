import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BottomNavigation from './components/BottomNaviagation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Home />} />
      </Routes>
      <BottomNavigation />
    </BrowserRouter>
  );
}

export default App;
