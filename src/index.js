import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



import { BrowserRouter, Route, Routes } from 'react-router-dom';


import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';

import HomePage from './pages/mainPages/homePage/HomePage'
import KurslarPage from './pages/kurslarPage/KurslarPage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>




    <BrowserRouter>



      <Routes>


        <Route element={<DashboardLayout/>}>

          <Route path='/' element={<HomePage/>}/>

        </Route>

        <Route>
        
          <Route path='/kurslar' element={<KurslarPage/>}/>

        </Route>

      </Routes>



    </BrowserRouter>



    
  // {/* </React.StrictMode> */}
);

