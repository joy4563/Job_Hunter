import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LoadingSpinner from './Components/LoadSpinner/LoadingSpinner';

function App() {
  const navigation = useNavigation();
  return (
    <div className="App">
      <Navbar></Navbar>
      <div>{navigation.state==='loading' && <LoadingSpinner></LoadingSpinner>}</div>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
