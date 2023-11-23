import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Mainpage, Detailpage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/todos/:todoId" element={<Detailpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
