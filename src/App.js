import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './pages/Home';
import ToDoApp from './projects/ToDoList/ToDoApp';
import DictionaryApp from './projects/DictionaryApp/DictionaryApp';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='to-do-list' element={<ToDoApp />} />
            <Route path='dictionary' element={<DictionaryApp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
