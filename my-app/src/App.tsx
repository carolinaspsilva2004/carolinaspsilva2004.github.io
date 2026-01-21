import "./index.css";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );}
