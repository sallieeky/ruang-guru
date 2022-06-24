import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
