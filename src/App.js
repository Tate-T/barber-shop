import "./App.css";
import "./components/Header/Header.jsx";

import { Route, Routes } from "react-router-dom";

import BarbersPage from "./pages/BarbersPage/BarbersPage.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/barbers" element={<BarbersPage />} />
      </Route>
    </Routes>
  );
}

export default App;
