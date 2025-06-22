import { Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/Home";
import DocScreen from "./screens/Doc";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/doc" element={<DocScreen />} />
    </Routes>
  );
}
