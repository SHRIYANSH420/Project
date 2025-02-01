import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FAQ from "./pages/Faq";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4 flex space-x-4">
          <Link to="/" className="text-blue-500">Home</Link>
          <Link to="/admin" className="text-blue-500">Admin</Link>
        </nav>
        <Routes>
          <Route path="/" element={<FAQ />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
