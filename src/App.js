import React from 'react';
import LoginPage from './LoginPage/LoginPage';
import MainPage from './MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Watchpage from './Watch/Watchpage';
import MarketPlace from './MarketPlace/MarketPlace';
import Gaming from './Gaming/Gaming';
import Groups from './Groups/Groups';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LoginPage />}/>
        <Route exact path='/mainpage' element={<MainPage />}/>
        <Route exact path='/watch' element={<Watchpage/>}/>
        <Route exact path='/marketplace' element={<MarketPlace/>}/>
        <Route exact path='/gaming' element={<Gaming/>}/>
        <Route exact path='/groups' element={<Groups/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
