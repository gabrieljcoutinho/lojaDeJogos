
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//pages
import Home from './pages/Home';
import Loja from './pages/Loja';
import Contato from './pages/Contato';

//Components do projeto
import Header from './Components/Header';
import Footer from './Components/Footer';

import ScrollToTop from './ScrollToTop';

/*Pages compras de cada jogo*/
import EldenRing from './pageComprarJogo/EldenRing.js'
import GhostWireTokyo from './pageComprarJogo/GhostWireTokyo.js'
import GodOfWarRagnarok from './pageComprarJogo/GodOfWarRagnarok.js'
import HomemAranha2 from './pageComprarJogo/HomemAranha2.js'
import Mk1 from './pageComprarJogo/Mk1.js'
import ReVillage from './pageComprarJogo/ReVillage.js'
import SilentHill2 from './pageComprarJogo/SilentHill2.js'
import MilesMorales  from './pageComprarJogo/MilesMorales.js'
import Stray from './pageComprarJogo/Stray.js'
import TlouI from './pageComprarJogo/tlouI.js'
import TlouII from './pageComprarJogo/tlouII.js'
import TheCrewMotorfast from './pageComprarJogo/theCrewMotorfast.js';
import BlackMyth from './pageComprarJogo/BlackMyth.js';
import UntillDawn from './pageComprarJogo/untillDawn.js'
import GranTurismo from './pageComprarJogo/granTurismo.js';
import AssasinoShadows  from './pageComprarJogo/AssasinoShadows.js'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />

        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/loja/Play/Station" element={<Loja />} />
          <Route path="/contato/Play/Station" element={<Contato />} />


          {/*Pages Cada Jogo*/}
          <Route path="/eldenRing/comprar/PlayStaion/Palace" element={<EldenRing />} />
          <Route path="/ghostWireTokyo/comprar/PlayStaion/Palace" element={<GhostWireTokyo />} />
          <Route path="/godOfWarRagnarok/comprar/PlayStaion/Palace" element={<GodOfWarRagnarok/>} />
          <Route path="/homemAranha2/comprar/PlayStaion/Palace" element={<HomemAranha2/>} />
          <Route path="/mk1/comprar/PlayStaion/Palace" element={<Mk1/>} />
          <Route path="/reVillage/comprar/PlayStaion/Palace" element={<ReVillage/>} />
          <Route path="/silentHill/comprar/PlayStaion/Palace" element={<SilentHill2/>} />
          <Route path="/milesMorales/comprar/PlayStaion/Palace" element={<MilesMorales/>} />
          <Route path='/stray/comprar/PlayStaion/Palace' element={<Stray/>} />
          <Route path='/tlouI/comprar/PlayStaion/Palace' element={<TlouI/>} />
          <Route path='/tlouII/comprar/PlayStaion/Palace' element={<TlouII/>} />
          <Route path='/theCrew/comprar/PlayStaion/Palace' element={<TheCrewMotorfast/>} />
          <Route path='/blackMyth/comprar/PlayStaion/Palace' element={<BlackMyth/>} />
          <Route path='/UntillDawn/comprar/PlayStaion/Palace' element={<UntillDawn/>} />
          <Route path='/GranTurismo/comprar/PlayStaion/Palace' element={<GranTurismo/>} />
          <Route path='/AssasinoShadows/comprar/PlayStaion/Palace' element={<AssasinoShadows/>} />



        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;