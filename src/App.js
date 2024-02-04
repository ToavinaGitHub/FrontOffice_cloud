import './App.css';
import Header from './components/Header';
import Accueil from './components/Accueil';
import SideBar from './components/SideBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateMessage from './components/Message';
import BoiteDiscussion from './components/BoiteDiscussion';
import HistoriqueAnnonce from './components/HistoriqueAnnonce';
import AnnonceFavoris from './components/AnnonceFavoris';
import Details from './components/Details';
import Login from './components/Login';
import Recherche from './components/Recherche';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route 
          path="/Login/:id" 
          element={
            <>
            <Header />
            <Login />
            <Footer />
          </> 
          }
        />
       <Route 
          path="/" 
          element={
            <>
            <Header />
            <div style={{ display: "flex" }}>
              <SideBar />
              <div style={{ flex: 1 }}>
                  <Accueil />
              </div>
            </div>
            <Footer />
          </> 
          }
        />
        <Route 
          path="/HistoriqueAnnonce" 
          element={
            <>
              <Header />
              <HistoriqueAnnonce />
            </> 
          }
        />
         <Route 
          path="/AnnonceFavoris" 
          element={
            <>
              <Header />
              <AnnonceFavoris />
            </> 
          }
        />
        <Route 
          path="/Message" 
          element={
            <>
              <Header />
              <PrivateMessage />
            </> 
          }
        />
        <Route 
          path="/Discussions" 
          element={
            <>
              <Header />
              <BoiteDiscussion />
            </> 
          }
        />
        <Route 
          path="/Details/:idAnnonce" 
          element={
            <>
              <Header />
              <Details />
              <Footer />
            </> 
          }
        />
         <Route 
          path="/Recherche" 
          element={
            <>
            <Header />
            <Recherche/>
            <Footer />
            </> 
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
