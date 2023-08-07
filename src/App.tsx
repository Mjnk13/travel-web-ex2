import React from 'react';
import './App.css';
import Homepage from './page/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import PackagesArchive from './page/PackagesArchive';
import Footer from './Footer';
import PackageDetail from './page/PackageDetail';
import TourInformation from './page/component/TourInformation';
import TourPlan from './page/component/TourPlan';
import TourLocation from './page/component/TourLocation';
import TourGallery from './page/component/TourGallery';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/*' element={<Homepage/>}></Route>
          <Route path='/packages-archive/*' element={<PackagesArchive/>}></Route>
          <Route path='/package-detail/*' element={<PackageDetail/>}>
            <Route path="information/:id" element={<TourInformation/>}></Route>
            <Route path="tour-plan/:id" element={<TourPlan/>}></Route>
            <Route path="location/:id" element={<TourLocation/>}></Route>
            <Route path="gallery/:id" element={<TourGallery/>}></Route>
          </Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
