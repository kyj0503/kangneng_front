<<<<<<< HEAD
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
=======
import Calendar from './pages/Calendar';
import React, { Fragment } from 'react';
import AskQuestion from './pages/AskQuestion'; // Import 추가 확인
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={
                        <Fragment>
                            <div>       
                                <h1>React & Spring Boot Communication</h1>
                                <AskQuestion /> {/* AskQuestion 컴포넌트 추가 */}
                                <Calendar />
                            </div>
                        </Fragment>
                    }/>
                    <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
>>>>>>> origin/main
    );
}

export default App;