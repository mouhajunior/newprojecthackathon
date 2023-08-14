import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Accueil from './components/pages/Accueil'
// import Navbar from './components/navbar/Navbar'
import Personnel from './components/pages/Personnel'
import Comptabilite from './components/pages/Comptabilite'
import Eleves from './components/pages/Eleves'
import Professeur from './components/pages/Professeur'
import Authentification from './components/pages/Authentification'
import Droit from './components/pages/Droit'
import Role from './components/pages/Role'
import Scolarite from './components/pages/Scolarite'
import Pointage from './components/pages/Pointage'



const App = () => {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
      <Sidebar>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Accueil" element={<Accueil />} />
          <Route path="/Personnel" element={<Personnel />} />
          <Route path="/Comptabilite" element={<Comptabilite />} />
          <Route path="/Eleves" element={<Eleves />} />
          <Route path="/Professeur" element={<Professeur />} />
          <Route path="/Authentification" element={<Authentification />} />
          <Route path="/Droit" element={<Droit />} />
          <Route path="/Role" element={<Role />} />
          <Route path="/Scolarite" element={<Scolarite />} />
          <Route path="/Pointage" element={<Pointage />} />





        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;