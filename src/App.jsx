import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Menu />
              <Index />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
