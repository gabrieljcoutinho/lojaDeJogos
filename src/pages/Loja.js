import React from 'react'
import '../CSSdeCadaPagina/loja.css'
import { Link } from 'react-router-dom';


/*imgsJogos Imports*/
import eldenRing from '../imgsJogos/eldenRing.jpg';
import ghostwireTokyo from '../imgsJogos/ghostwireTokyo.jpg';
import godOfWarRagnarok from '../imgsJogos/godOfWarRagnarok.jpg';
import homemAranha2 from '../imgsJogos/homemAranha2.jpg';
import mk1  from '../imgsJogos/mk1.jpg';
import reVillage  from '../imgsJogos/reVillage.jpg';
import silentHill from '../imgsJogos/silentHill.jpg';
import spidermanMilesMorales from '../imgsJogos/spidermanMilesMorales.jpg';
import stray from '../imgsJogos/stray.jpg';
import tlou from '../imgsJogos/tlou.jpg';
import tlou2 from '../imgsJogos/tlou2.jpg';
import theCrewMotorfest from '../imgsJogos/theCrewMotorfest.jpg';
import blackMythWukong from '../imgsJogos/blackMythWukong.jpg'
import untilDawn from '../imgsJogos/untilDawn.jpg'
import granTurismo7 from '../imgsJogos/granTurismo7.jpg'
import screedShadows from '../imgsJogos/screedShadows.jpg'

/*Icones aparte*/


/*Variaveis nome dos jogos*/

import { jogo1, jogo2, jogo3,
jogo4, jogo5, jogo6,
jogo7,jogo8, jogo9,
jogo10, jogo11,jogo12,
jogo13, jogo14, jogo15, jogo16 } from '../Variaveis/variaveisNomesJogos.js';


/*Genero, Plataformas, Desenvolvedores , Lançamentos e Classificação*/
import {Ge, Pl, La, De, Cl}  from '../Variaveis/VariaveisGPLDC.js'


/*Variaveis conteudo divs*/
import  {generoEldenRing, plataformasEldenRing,lancamentoEldenRing, desenvolvedoraEldenRing, classificaçãoEldenRing} from '../Variaveis/variaveisConteudoDivs.js'
import {generoGhostwireTokyo, plataformasGhostwireTokyo, lancamentoGhostwireTokyo, desenvolvedoraGhostwireTokyo, classificaçãoGhostwireTokyo}  from '../Variaveis/variaveisConteudoDivs.js'
import {generogodOfWarRagnarok, plataformasgodOfWarRagnarok, lancamentogodOfWarRagnarok, desenvolvedoragodOfWarRagnarok, classificaçãogodOfWarRagnarok} from '../Variaveis/variaveisConteudoDivs.js'
import {generoSpiderMan2, plataformasSpiderMan2, lancamentoSpiderMan2, desenvolvedoraSpiderMan2, classificacaoSpiderMan2} from '../Variaveis/variaveisConteudoDivs.js'
import {generoMK1, plataformasMK1, lancamentoMK1, desenvolvedoraMK1, classificaçãoMK1} from '../Variaveis/variaveisConteudoDivs.js'
import {generoREVillage, plataformasREVillage, lancamentoREVillage, desenvolvedoraREVillage, classificaçãoREVillage} from '../Variaveis/variaveisConteudoDivs.js'
import {generoSilentHill2, plataformasSilentHill2, lancamentoSilentHill2, desenvolvedoraSilentHill2, classificaçãoSilentHill2} from '../Variaveis/variaveisConteudoDivs.js'
import {generospidermanMilesMorales, plataformasspidermanMilesMorales, lancamentospidermanMilesMorales, desenvolvedoraspidermanMilesMorales, classificaçãospidermanMilesMorales} from '../Variaveis/variaveisConteudoDivs.js'
import {generoStray, plataformasStray, lancamentoStray, desenvolvedoraStray, classificaçãoStray} from '../Variaveis/variaveisConteudoDivs.js'
import {generoTLOU1, plataformasTLOU1, lancamentoTLOU1, desenvolvedoraTLOU1, classificaçãoTLOU1} from '../Variaveis/variaveisConteudoDivs.js'
import {generoTLOU2, plataformasTLOU2, lancamentoTLOU2, desenvolvedoraTLOU2, classificaçãoTLOU2} from '../Variaveis/variaveisConteudoDivs.js'
import {generotheCrewMotorfest, plataformastheCrewMotorfest, lancamentotheCrewMotorfest, desenvolvedoratheCrewMotorfest, classificaçãotheCrewMotorfest} from '../Variaveis/variaveisConteudoDivs.js'
import {generoblackMythWukong, plataformasblackMythWukong, lancamentoblackMythWukong, desenvolvedorablackMythWukong, classificaçãoblackMythWukong} from '../Variaveis/variaveisConteudoDivs.js'
import {generountilDawn, plataformasuntilDawn, lancamentountilDawn, desenvolvedorauntilDawn, classificaçãountilDawn} from '../Variaveis/variaveisConteudoDivs.js'
import {generogranTurismo7, plataformasgranTurismo7,lancamentogranTurismo7, desenvolvedoragranTurismo7, classificaçãogranTurismo7} from '../Variaveis/variaveisConteudoDivs.js'
import {generoScreedShadows, plataformasScreedShadows, lancamentoScreedShadows, desenvolvedoraScreedShadows, classificaçãoScreedShadows} from '../Variaveis/variaveisConteudoDivs.js'

/*Variaveis Preços Jogos*/
import{preçoEldenRing, preçoGhostwireTokyo,
   preçoGodOfWarRagnarok, preçoHomemAranha2,
   preçoMortalKombat1, preçoResidentEvillVillage,
   preçoSilentHill2, preçoSpiderManMilesMorales,
   preçoStray, preçoTLOUI, preçoTLOUII,
   preçoTheCrewMotorfest, preçoBlackMythWukong,
   preçoUntilDawn, preçoGranTurismo7, preçoAssasinsCreedShadows
} from '../Variaveis/variavesiPrecosJogs.js'




const Loja = () => {



  return (


<div className='flexbox'>

{/*Parte 1*/}

<div class="div1">
<img src={eldenRing} alt={ jogo1 } title={ jogo1 } />
<p className='NomeJogo' title='Elden Ring'> { jogo1 }</p>
   <p className="detalhesDoJogo">
   <strong>{Ge}</strong> <span>{ generoEldenRing }</span><br />
      <strong>{Pl}</strong> <span>{ plataformasEldenRing }</span><br />
      <strong>{La}</strong> <span>{lancamentoEldenRing}</span><br />
      <strong>{De}</strong> <span>{desenvolvedoraEldenRing}</span><br />
      <strong>{Cl}</strong> <span>{classificaçãoEldenRing}</span>
   </p>

<br />
<p className='precoJogo'>

      {preçoEldenRing}

</p>

<br />
<br />
<Link to="/eldenRing/comprar/PlayStaion/Palace" className="btnCompraLoja" title="Clicar">
          <span>Comprar</span>
        </Link>
<br />
<br />
</div>

<div class="div1">
  <img src={ghostwireTokyo} alt={ jogo2 } title= { jogo2 } />
  <p className='NomeJogo' title='Ghostwire Tokyo' > { jogo2 }</p>
  <p className="detalhesDoJogo">
   <strong>{Ge} </strong> <span>{generoGhostwireTokyo}</span> <br />
      <strong>{Pl} </strong><span>{plataformasGhostwireTokyo}</span> <br />
      <strong>{La}</strong> <span>{lancamentoGhostwireTokyo}</span> <br />
      <strong>{De} </strong><span>{desenvolvedoraGhostwireTokyo}</span> <br />
      <strong>{Cl} </strong><span>{classificaçãoGhostwireTokyo}</span>
   </p>


   <br />
   <p className='precoJogo'>

   {preçoGhostwireTokyo}
</p>
   <br />
<br />
<a href="/ghostwireTokyo/comprar/PlayStaion/Palace" className='btnCompraLoja' title='Clicar'><span>Comprar</span></a>
<br />
<br />
</div>

<div class="div1">
    <img src={godOfWarRagnarok} alt={ jogo3  } title={ jogo3  } />
    <p className='NomeJogo' title='God Of War Ragnarok'> { jogo3  }</p>

    <p className="detalhesDoJogo">
   <strong>{Ge} </strong> <span>{generogodOfWarRagnarok}</span><br />
      <strong>{Pl} </strong><span>{plataformasgodOfWarRagnarok}</span> <br />
      <strong>{La}</strong> <span>{lancamentogodOfWarRagnarok}</span> <br />
      <strong>{De} </strong> <span>{desenvolvedoragodOfWarRagnarok}</span><br />
      <strong>{Cl} </strong><span>{classificaçãogodOfWarRagnarok}</span>
   </p>

   <br />
   <br />
   <p className='precoJogo'>

  {preçoGodOfWarRagnarok}

</p><br />
<br /><br />
<a href="/godOfWarRagnarok/comprar/PlayStaion/Palace" className='btnCompraLoja' title='Clicar'><span>Comprar</span></a>
<br />
<br />
</div>

<div class="div1">
<img src={homemAranha2} alt= { jogo4 }  title= { jogo4 } />
<p className='NomeJogo' title='Homem Aranha 2'> { jogo4 }</p>

<p className="detalhesDoJogo">
   <strong>{Ge} </strong> <span>{generoSpiderMan2}</span><br />
      <strong>{Pl} </strong><span>{plataformasSpiderMan2} </span> <br />
      <strong>{La}</strong> <span>{lancamentoSpiderMan2}</span> <br />
      <strong>{De} </strong> <span>{desenvolvedoraSpiderMan2}</span><br />
      <strong>{Cl} </strong><span>{classificacaoSpiderMan2}</span>
   </p>

<br /><br />
<p className='precoJogo'>

   {preçoHomemAranha2}
</p>
<br /><br /><br />
<a href="/homemAranha2/comprar/PlayStaion/Palace" className='btnCompraLoja' title='Clicar'><span>Comprar</span></a>
<br />
</div>


{/*Parte 2*/}

<div class="div1">
  <img src={mk1} alt={ jogo5} title={ jogo5} />
  <p className='NomeJogo' title='Mortal Kombat 1'> { jogo5}</p>

  <p className="detalhesDoJogo">
   <strong>{Ge} </strong> <span>{generoMK1}</span><br />
      <strong>{Pl} </strong><span>{plataformasMK1}</span> <br />
      <strong>{La}</strong> <span>{lancamentoMK1}</span> <br />
      <strong>{De} </strong> <span>{desenvolvedoraMK1}</span><br />
      <strong>{Cl} </strong><span>{classificaçãoMK1}</span>
   </p>
   <br /><br />
<p className='precoJogo'>

   {preçoMortalKombat1}

</p>
<br /><br /><br />
<a href="/mk1/comprar/PlayStaion/Palace" className='btnCompraLoja' title='Clicar'><span>Comprar</span></a>
<br />
</div>

<div class="div1">
  <img src={reVillage} alt={ jogo6 } title={ jogo6 }/>
  <p className='NomeJogo' title='Resident Evill Village' > { jogo6 }</p>

  <p className="detalhesDoJogo">
   <strong>{Ge} </strong> <span>{generoREVillage}</span><br />
      <strong>{Pl} </strong><span>{plataformasREVillage}</span> <br />
      <strong>{La}</strong> <span>{lancamentoREVillage}</span> <br />
      <strong>{De} </strong> <span>{desenvolvedoraREVillage}</span><br />
      <strong>{Cl} </strong><span>{classificaçãoREVillage}</span>
   </p>

   <br /><br />
<p className='precoJogo'>

{preçoResidentEvillVillage}

</p>
<br /><br /><br />
<a href="/reVillage/comprar/PlayStaion/Palace" className='btnCompraLoja' title='Clicar'><span>Comprar</span></a>
<br />
</div>

<div class="div1">
  <img src={silentHill} alt={ jogo7} title={ jogo7}/>
  <p className='NomeJogo' title='Silent Hill 2'> { jogo7}</p>

  <p className="detalhesDoJogo">
   <strong>{Ge} </strong> <span>{generoSilentHill2}</span><br />
      <strong>{Pl} </strong><span>{plataformasSilentHill2}</span> <br />
      <strong>{La}</strong> <span>{lancamentoSilentHill2}</span> <br />
      <strong>{De} </strong> <span>{desenvolvedoraSilentHill2}</span><br />
      <strong>{Cl} </strong><span>{classificaçãoSilentHill2}</span>
   </p>

   <br /><br />
<p className='precoJogo'>

{preçoSilentHill2}

</p>
<br /><br /><br />
<a href="/silentHill/comprar/PlayStaion/Palace" className='btnCompraLoja' title='Clicar'><span>Comprar</span></a>
<br />
</div>

<div class="div1">
  <img src={spidermanMilesMorales} alt={ jogo8 } title={ jogo8 }/>
  <p className='NomeJogo' title='Spider Man Miles Morales'> { jogo8 }</p>

  <p className="detalhesDoJogo">
   <strong>{Ge} </strong> <span>{generospidermanMilesMorales}</span><br />
      <strong>{Pl} </strong><span>{plataformasspidermanMilesMorales}</span> <br />
      <strong>{La}</strong> <span>{lancamentospidermanMilesMorales}</span> <br />
      <strong>{De} </strong> <span>{desenvolvedoraspidermanMilesMorales}</span><br />
      <strong>{Cl} </strong><span>{classificaçãospidermanMilesMorales}</span>
   </p>
   <br /><br />
<p className='precoJogo'>

{preçoSpiderManMilesMorales}

</p>
<br /><br /><br />
<a href="/milesMorales/comprar/PlayStaion/Palace" className='btnCompraLoja' title='Clicar'><span>Comprar</span></a>
<br />
</div>

{/*Parte 3*/}

<div class="div1">
  <img src={stray} alt={ jogo9 }  title={ jogo9 }/>
  <p className='NomeJogo' title='Stray'> { jogo9 }</p>

  <p className="detalhesDoJogo stray">
   <strong>{Ge} </strong> <span>{generoStray}</span><br />
      <strong>{Pl} </strong><span>{plataformasStray}</span> <br />
      <strong>{La}</strong> <span>{lancamentoStray}</span> <br />
      <strong>{De} </strong> <span>{desenvolvedoraStray}</span><br />
      <strong>{Cl} </strong><span>{classificaçãoStray}</span>
   </p>
   <br /><br />
<p className='precoJogo'>

{preçoStray}

</p>
<br /><br /><br />
<a href="/stray/comprar/PlayStaion/Palace" className='btnCompraLoja' title='Clicar'><span>Comprar</span></a>
<br />
</div>

<div class="div1">
  <img src={tlou} alt={ jogo10} title={ jogo10}  />
  <p className='NomeJogo' title='The Last Of Us Part I'> { jogo10}</p>

  <p className="detalhesDoJogo">
   <strong>{Ge} </strong> <span>{generoTLOU1}</span><br />
   <strong>{Pl} </strong><span>{plataformasTLOU1}</span> <br />
      <strong>{La}</strong> <span>{lancamentoTLOU1}</span> <br />
      <strong>{De} </strong> <span>{desenvolvedoraTLOU1}</span><br />
      <strong>{Cl} </strong><span>{classificaçãoTLOU1}</span>
   </p>
   <br /><br />
<p className='precoJogo'>

 {preçoTLOUI}

</p>
<br /><br /><br />
<a href="/tlouI/comprar/PlayStaion/Palace" className='btnCompraLoja' title='Clicar'><span>Comprar</span></a>
<br />
</div>

<div class="div1">
  <img src={tlou2} alt= { jogo11} title= { jogo11}  />
  <p className='NomeJogo' title='The Last Of Us Part II'> { jogo11}</p>

  <p className="detalhesDoJogo">
   <strong>{Ge} </strong> <span>{generoTLOU2}</span><br />
      <strong>{Pl} </strong><span>{plataformasTLOU2}</span> <br />
      <strong>{La}</strong> <span>{lancamentoTLOU2}</span> <br />
      <strong>{De} </strong> <span>{desenvolvedoraTLOU2}</span><br />
      <strong>{Cl} </strong><span>{classificaçãoTLOU2}</span>
   </p>
   <br /><br />
<p className='precoJogo'>

   {preçoTLOUII}

</p>
<br /><br /><br />
<a href="/tlouII/comprar/PlayStaion/Palace" className='btnCompraLoja' title='Clicar'><span>Comprar</span></a>
<br />
</div>

<div class="div1">
  <img src={theCrewMotorfest} alt={ jogo12} title={ jogo12}/>
  <p className='NomeJogo' title='The Crew Motorfest'> { jogo12}</p>

  <p className="detalhesDoJogo">
   <strong>{Ge} </strong> <span>{generotheCrewMotorfest}</span><br />
      <strong>{Pl} </strong><span>{plataformastheCrewMotorfest}</span> <br />
      <strong>{La}</strong> <span>{lancamentotheCrewMotorfest}</span> <br />
      <strong>{De} </strong> <span>{desenvolvedoratheCrewMotorfest}</span><br />
      <strong>{Cl} </strong><span>{classificaçãotheCrewMotorfest}</span>
   </p>
   <br /><br />
<p className='precoJogo'>

{preçoTheCrewMotorfest}



</p>
<br /><br /><br />
<a href="/theCrew/comprar/PlayStaion/Palace" className='btnCompraLoja' title='Clicar'><span>Comprar</span></a>
<br />
</div>


<div className="div1">
  <img src={blackMythWukong} alt={jogo13} title={jogo13}/>
  <p className="NomeJogo" title='Black Myth Wukong'>{jogo13}</p>

  <p className="detalhesDoJogo">
   <strong>{Ge} </strong> <span>{generoblackMythWukong}</span><br />
      <strong>{Pl} </strong><span>{plataformasblackMythWukong}</span> <br />
      <strong>{La}</strong> <span>{lancamentoblackMythWukong}</span> <br />
      <strong>{De} </strong> <span>{desenvolvedorablackMythWukong}</span><br />
      <strong>{Cl} </strong><span>{classificaçãoblackMythWukong}</span>
   </p>
   <br /><br />
<p className='precoJogo'>

{preçoBlackMythWukong}

</p>
<br /><br /><br />
<a href="/blackMyth/comprar/PlayStaion/Palace" className='btnCompraLoja' title='Clicar'><span>Comprar</span></a>
<br />

</div>

<div className="div1">
  <img src={untilDawn} alt={jogo14} title={jogo14} />
  <p className="NomeJogo" title='Until Dawn'>{jogo14}</p>

  <p className="detalhesDoJogo">
   <strong>{Ge} </strong> <span>{generountilDawn}</span><br />
      <strong>{Pl} </strong><span>{plataformasuntilDawn}</span> <br />
      <strong>{La}</strong> <span>{lancamentountilDawn}</span> <br />
      <strong>{De} </strong> <span>{desenvolvedorauntilDawn}</span><br />
      <strong>{Cl} </strong><span>{classificaçãountilDawn}</span>
   </p>
   <br /><br />
<p className='precoJogo'>

{preçoUntilDawn}

</p>
<br /><br /><br />
<a href="/UntillDawn/comprar/PlayStaion/Palace" className='btnCompraLoja' title='Clicar'><span>Comprar</span></a>
<br />
</div>

<div className="div1">
  <img src={granTurismo7} alt={jogo15} title={jogo15}/>
    <p className="NomeJogo" title='Gran Turismo 7'>{jogo15}</p>

    <p className="detalhesDoJogo">
   <strong>{Ge} </strong> <span>{generogranTurismo7}</span><br />
      <strong>{Pl} </strong><span>{plataformasgranTurismo7}</span> <br />
      <strong>{La}</strong> <span>{lancamentogranTurismo7}</span> <br />
      <strong>{De} </strong> <span>{desenvolvedoragranTurismo7}</span><br />
      <strong>{Cl} </strong><span>{classificaçãogranTurismo7}</span>
   </p>
   <br /><br />
<p className='precoJogo'>

{preçoGranTurismo7}

</p>
<br /><br /><br />
<a href="/GranTurismo/comprar/PlayStaion/Palace" className='btnCompraLoja' title='Clicar'><span>Comprar</span></a>
<br />
</div>

<div className="div1">
  <img src={screedShadows} alt={jogo16} title={jogo16} />
  <p className="NomeJogo" title={jogo16} >{jogo16}</p>

  <p className="detalhesDoJogo">
   <strong>{Ge} </strong> <span>{generoScreedShadows}</span><br />
      <strong>{Pl} </strong><span>{plataformasScreedShadows}</span> <br />
      <strong>{La}</strong> <span>{lancamentoScreedShadows}</span> <br />
      <strong>{De} </strong> <span>{desenvolvedoraScreedShadows}</span><br />
      <strong>{Cl} </strong><span>{classificaçãoScreedShadows}</span>
   </p>
   <br /><br />
<p className='precoJogo'>

      {preçoAssasinsCreedShadows}

</p>
<br /><br /><br />
<a href="/AssasinoShadows/comprar/PlayStaion/Palace" className='btnCompraLoja' title='Clicar'><span>Comprar</span></a>
<br />
</div>

    </div>
  )
}

export default Loja