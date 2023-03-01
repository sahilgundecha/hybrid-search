import React from "react"
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import PostDetails from './pages/post-details/PostDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='post/:id' element={<PostDetails/>}></Route>
    </Routes>
  );
}

export default App;
