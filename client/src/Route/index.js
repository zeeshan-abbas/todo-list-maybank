import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList  from '../Components/TodoList'
import NotFound  from '../Components/NotFound'
import About  from '../Components/About'

export const PATH_HOME = '/';
export const PATH_ABOUT = '/about';


export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PATH_HOME} element={<TodoList/>} />
                <Route path={PATH_ABOUT} element={<About/>} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}
