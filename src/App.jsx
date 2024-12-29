import "./App.css";
import Pagechanger from "./components/Pagechnager";
import Navbar from "./components/Navbar";
import { UserContext } from "./Services/UserContext";
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { user, setUser } = useContext(UserContext);;

  return (
    user.isLogin ? <Router>
      <Navbar />
      <Routes>
        <Route path="/profile" element={<h1>Welcome {user.firstname}</h1>} />
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/logout" element={<h1>logout</h1>} />
        <Route path="/about" element={<h1>about</h1>} />
        <Route path="/services" element={<h1>services</h1>} />
      </Routes>
    </Router> :
      <Pagechanger />
  );

  // Alternatively, you can uncomment the Router-based navigation if you plan to use it later:
  /*
  return (
    
  );
  */
}

export default App;
