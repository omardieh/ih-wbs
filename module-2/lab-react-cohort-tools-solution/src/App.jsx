import "./App.css";
import Navbar from "./components/Navbar";
import StudentListPage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";

import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<StudentListPage />} />
        <Route path="/students/:studentId" element={<StudentDetailsPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>

    </div>
  );
}

export default App;
