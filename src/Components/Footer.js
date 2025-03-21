import React from 'react';
import '../CSSdeCadaPagina/footer.css';

// Imports parcerias logo
import BethesdaSoftworks from '../imgsParceria/BethesdaSoftworks.jpg';
import BlooberTeam from '../imgsParceria/BlooberTeam.jpg';
import BlueTwelveStudio from '../imgsParceria/BlueTwelveStudio.jpg';
import Capcom from '../imgsParceria/Capcom.jpg';
import FromSoftware from '../imgsParceria/FromSoftware.jpg';
import GameScience from '../imgsParceria/GameScience.jpg';
import InsomniacGames from '../imgsParceria/InsomniacGames.jpg';
import IvoryTower from '../imgsParceria/IvoryTower.jpg';
import NaughtyDog from '../imgsParceria/NaughtyDog.jpg';
import NetherRealmStudios from '../imgsParceria/NetherRealmStudios.jpg';
import PolyphonyDigital from '../imgsParceria/PolyphonyDigital.jpg';
import SantaMonicaStudio from '../imgsParceria/SantaMonicaStudio.jpg';
import SupermassiveGames from '../imgsParceria/SupermassiveGames.jpg';
import Ubisoft from '../imgsParceria/Ubisoft.jpg';
import { title } from 'framer-motion/client';

const partners = [
  { src: BethesdaSoftworks, alt: "Bethesda Softworks", url: "https://bethesda.net/"},
  { src: BlooberTeam, alt: "Bloober Team", url: "https://www.blooberteam.com/" },
  { src: BlueTwelveStudio, alt: "Blue Twelve Studio", url: "https://stray.fandom.com/wiki/BlueTwelve_Studio" },
  { src: Capcom, alt: "Capcom", url: "https://www.capcom.com/" },
  { src: FromSoftware, alt: "From Software", url: "https://www.fromsoftware.jp/ww/" },
  { src: GameScience, alt: "Game Science", url: "https://www.heishenhua.com/" },
  { src: InsomniacGames, alt: "Insomniac Games", url: "https://insomniac.games/" },
  { src: IvoryTower, alt: "Ivory Tower", url: "https://www.ivory-tower.com/" },
  { src: NaughtyDog, alt: "Naughty Dog", url: "https://www.naughtydog.com/" },
  { src: NetherRealmStudios, alt: "NetherRealm Studios", url: "https://www.netherrealm.com/" },
  { src: PolyphonyDigital, alt: "Polyphony Digital", url: "https://www.polyphony.co.jp/en/" },
  { src: SantaMonicaStudio, alt: "Santa Monica Studio", url: "https://sms.playstation.com/" },
  { src: SupermassiveGames, alt: "Supermassive Games", url: "https://www.supermassivegames.com/" },
  { src: Ubisoft, alt: "Ubisoft", url: "https://www.ubisoft.com/" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <h3>© PlayStation Palace</h3>
      <div className="image-grid">
        {partners.map((partner, index) => (
          <a key={index} href={partner.url} target="_blank" rel="noopener noreferrer">
            <img className="imgsFooter" src={partner.src} alt={partner.alt} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;