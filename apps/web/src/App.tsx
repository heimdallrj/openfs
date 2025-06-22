import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
}
