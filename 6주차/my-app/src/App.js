import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainPage, DetailPage, UserPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
