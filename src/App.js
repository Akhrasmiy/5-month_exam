import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import About from './about';
import MainPage from './mainPage';
import ErrorPage from './pages/ErrorPage';
import OneContent from './layout/oneContent';
import SignIn from './pages/Login';
import Addelem from './pages/Addinvocies';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}>
        </Route>
        <Route path="about" element={<About/>} />
        <Route path="addelem" element={<Addelem/>} />
        <Route path="/content/:id" element={<OneContent />} />
        <Route path="/login" element={<SignIn />} />

        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
