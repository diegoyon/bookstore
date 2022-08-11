import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Books from './Books';
import Categories from './Categories';

function App() {
  return (
    <Router>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
      <Routes>
        <Route path="/" exact element={<Books />} />
        <Route path="/categories" exact element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
