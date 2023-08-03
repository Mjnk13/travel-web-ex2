import React from 'react';
import './App.css';
import Homepage from './page/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import PackagesArchive from './page/PackagesArchive';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/*' element={<Homepage/>}></Route>
          <Route path='/packages-archive/*' element={<PackagesArchive/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
