import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Nav from "./components/nav";
import Order from "./pages/Order";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
