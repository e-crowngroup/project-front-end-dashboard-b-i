import React, {useContext} from 'react'
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

import { Link }from 'react-router-dom'




import './MarketingOverviewLogitech.css'
import RenderOverviewLogitech from './RenderOverviewLogitech';


const MarketingOverviewLogitech = () => {
    const { setToken } = useContext(StoreContext);
    
 
    return (
        <div className="container-full">
        
        <div className="box-container-over">
            <div className="btn-box">
          
            
            <Link to="/dashboardLogitech">
            <GoReply className="btn-btn">Voltar</GoReply>
            </Link>

            <AiOutlineCloseSquare  className="btn-btn" onClick={() => setToken(null)} />
            </div>
            
            <h1>Marketing Overview</h1>
            
            <div className="content">
               <RenderOverviewLogitech />
            </div>
        </div>
        </div>
    )

}

export default MarketingOverviewLogitech;