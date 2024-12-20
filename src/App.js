import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ToDoApp from './projects/ToDoList/ToDoApp';
import Layout from './Layout';
import Home from './pages/Home';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='to-do-list' element={<ToDoApp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
