import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/Home";
import VerifikasiData from "./routes/VerifikasiData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/verifikasi-data" element={<VerifikasiData />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
