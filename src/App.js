import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './pages/Home';
import ToDoApp from './projects/ToDoList/ToDoApp';
import DictionaryApp from './projects/DictionaryApp/DictionaryApp';
import TextManipulate from './projects/TextManipulate/TextManipulate';
import NewsApp from './projects/NewsApp/NewsApp';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='to-do-list' element={<ToDoApp />} />
            <Route path='dictionary' element={<DictionaryApp />} />
            <Route path='text-manipulate' element={<TextManipulate />} />
            <Route path='news' element={<NewsApp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
