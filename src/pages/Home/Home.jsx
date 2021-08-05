import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import './Home.css';


const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <div className="pages-home">
      
      <div className="container">
           <div className="btn-home">
      
          <AiOutlineCloseSquare className="btn-exit" onClick={() => setToken(null)} />
          </div>
      

     <div className="content">
       <div className="title">
      <h2>Business Plataform | Brands</h2>
      </div>
      

       <div className="box-container">
            <div className="box-logo ">
            <a href="https://e-crowngroup.com.br/"><img className="ecrown" src="./img/new/ECrown.png" alt="" /></a>

            </div>
            <div className="box-logo">
              <a href="https://www.maresia.com.br/"><img className="maresia" src="./img/new/Maresia.png" alt="" /></a>

            </div>
            <div className="box-logo">
            <a href="https://www.iomegastore.com.br/"><img className="iomega" src="./img/new/IoMega-White.png" alt="" /></a>

            </div>
            <div className="box-logo">
            <a href="https://www.wacomstore.com.br/"><img className="wacom" src="./img/new/wacom.png" alt="" /></a>

            </div>
        
       </div>
       <div className="box-container">
            <div className="box-logo" >
            <Link to="/dashboardLogitech"><img className="logitech" src="./img/new/logitech.png" alt="" /></Link>
            </div>
            <div className="box-logo ">
            <a href="https://www.cnstore.com.br/"><img className="cisco" src="./img/new/cisco.png" alt="" /></a>
            </div>
            <div className="box-logo" >
            <a href="https://www.huion.com.br/"><img className="huion" src="./img/new/huion.png" alt="" /></a>
            </div>
            <div className="box-logo creality">
            <a href="https://www.crealitystore.com.br/"><img className="" src="./img/new/Crea_edited.png" alt="" /></a>
            </div>
        
       </div>
       <div className="box-container">
            <div className="box-logo">
            <a href="https://www.topper.com.br/"><img className="topper" src="./img/new/topper.png" alt="" /></a>
            </div>
            <div className="box-logo">
            <a href="https://www.makerbotstore.com.br/"><img className="makerbot"  src="./img/new/makerbot.png" alt="" /></a> 
            </div>
            <div className="box-logo">
            <a href="https://www.hdstore.com.br/"><img className="hdstore"  src="./img/new/hdstore.png" alt="" /></a>
            </div>
            <div className="box-logo ">
            <a href="https://www.seagatestore.com/br"><img className="seagate"  src="./img/new/Gate_edited.png" alt="" /></a>
            </div>
        
       </div>
       <div className="box-container">
            <div className="box-logo">
            <a href="https://www.rainha.com.br/"><img className="rainha" src="./img/new/rainha.png" alt="" /></a>
            </div>
            <div className="box-logo">
            <a href="https://www.westerndigitalstore.com.br/"><img className="wd-digital" src="./img/new/wd-digital.png" alt="" /></a>
            </div>
            <div className="box-logo ">
            <a href="https://www.laciestore.com.br/"><img className="lacie" src="./img/new/lacie.png" alt="" /></a>
            </div>
            <div className="box-logo">
            <a href="https://nvidiastore.com.br/"><img className="nvidia" src="./img/new/nvidialogo.png" alt="" /></a>
            </div>
        
       </div> 
     </div>
      </div>
    </div>
  );
};

export default PagesHome;
