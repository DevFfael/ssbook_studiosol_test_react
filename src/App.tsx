import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BottomNavigation from './components/BottomNaviagation';
import Book from './pages/Book';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
      <BottomNavigation />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
