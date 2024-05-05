import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Biography from "./pages/Biography.jsx";
import Career from "./pages/Career.jsx";
import Gallery from "./pages/Gallery.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/biography" element={<Biography />} />
        <Route exact path="/career" element={<Career />} />
        <Route exact path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;