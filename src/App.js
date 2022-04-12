import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {" "}
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
