import React from 'react'
import Iframe from 'react-iframe';

import './MarketingOverview.css'


const RenderOverview = () => {
   return (
    
       <Iframe width="1280" 
               height="600" 
               src="https://datastudio.google.com/embed/reporting/c59f36f3-841b-4288-82f7-c089ff1e3bf8/page/t0MAC" 
               frameborder="0" 
               style="border:0" 
               allowfullscreen></Iframe>
    
   )
}

export default RenderOverview;
