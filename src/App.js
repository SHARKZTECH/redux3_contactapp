import "./styles.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
export default function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}
