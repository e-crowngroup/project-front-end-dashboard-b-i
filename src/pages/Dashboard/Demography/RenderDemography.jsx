import React from 'react'
import Iframe from 'react-iframe';

import './RenderDemography.css'


const RenderDemography = () => {
   return (
       <div className="box-api">
       <Iframe width="1280" 
               height="600" 
               src="https://datastudio.google.com/embed/reporting/d4828390-71d3-4b70-a8cd-bc14b7460cb0/page/9QvAC" 
               frameborder="0" 
               style="border:0" 
               allowfullscreen></Iframe>
       </div>
   )
}

export default RenderDemography;
