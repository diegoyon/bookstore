import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Books />} />
        <Route path="/categories" exact element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
