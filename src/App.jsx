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
    );
}

export default App;