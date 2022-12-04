import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Home, Profile, Navbar, Addnft, Covalent} from './components'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    
    <Routes>
      
      <Route path='/' element={<Home />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/nft' element={<Addnft />}/>
      <Route path='/covalent' element={<Covalent />}/>
    </Routes>
    </Router>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
