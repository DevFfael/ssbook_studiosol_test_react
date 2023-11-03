import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BottomNavigation from './components/BottomNaviagation';
import BookReview from './pages/BookReview';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookReview />} />
      </Routes>
      <BottomNavigation />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
