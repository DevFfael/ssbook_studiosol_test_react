import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BottomNavigation from './components/BottomNaviagation';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Home />} />
      </Routes>
      <BottomNavigation />
    </BrowserRouter>
  );
}

export default App;
