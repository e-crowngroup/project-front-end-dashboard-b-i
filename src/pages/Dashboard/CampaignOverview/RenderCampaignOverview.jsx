import React from 'react'
import Iframe from 'react-iframe';

import './RenderCampaignOverview.css'


const RenderCampaignOverview = () => {
   return (
       <div className="box-api">
       <Iframe width="1280" 
               height="600" 
               src="https://datastudio.google.com/embed/reporting/55346dd5-4a29-4f41-a429-8a477b06463d/page/9QvAC" 
               frameborder="0" 
               style="border:0" 
               allowfullscreen></Iframe>
       </div>
   )
}

export default RenderCampaignOverview;
