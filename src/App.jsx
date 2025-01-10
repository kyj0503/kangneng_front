import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Calendar from "./pages/Calendar";
import Important from "./pages/Important";
import Trash from "./pages/Trash";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/diary" element={<Diary />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/important" element={<Important />} />
                    <Route path="/trash" element={<Trash />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
