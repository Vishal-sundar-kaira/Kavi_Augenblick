import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

export default function Navbar() {
  return (
    <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  {/* <Route path="/home" element={<HomePage/>}></Route>
                  <Route path="/profile/:userId" element={<ProfilePage/>}></Route> */}
              </Routes>
       </BrowserRouter>
  )
}
