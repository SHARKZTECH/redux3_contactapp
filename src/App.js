import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
          <Route path="/delete/:id" />
        </Routes>
      </Router>
    </div>
  );
}
