import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/Private/Private';
import Home from './Home/Home';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import DashboardLogitech from './DashboardLogitech/DashboardLogitech';




import TimeAccess from './Dashboard/TimeAccess/TimeAccess';
import CampaignOverview from './Dashboard/CampaignOverview/CampaignOverview';
import Demograpy from './Dashboard/Demography/Demography'
import SalesOverview from './Dashboard/SalesOverview/SalesOverview'
import TimeSales from './Dashboard/TimeSales/TimeSales'
import ProdictiveSales from './Dashboard/ProdictiveSales/ProdictiveSales'



import TimeAccessLogitech from './DashboardLogitech/TimeAccessLogitech/TimeAccessLogitech';
import CampaignOverviewLogitech from './DashboardLogitech/CampaignOverviewLogitech/CampaignOverviewLogitech';
import DemograpyLogitech from './DashboardLogitech/DemographyLogitech/DemographyLogitech'
import SalesOverviewLogitech from './DashboardLogitech/SalesOverviewLogitech/SalesOverviewLogitech'
import TimeSalesLogitech from './DashboardLogitech/TimeSalesLogitech/TimeSalesLogitech'
import ProdictiveSalesLogitech from './DashboardLogitech/ProdictiveSalesLogitech/ProdictiveSalesLogitech'







const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route exact path="/login" component={Login} />
        
        <RoutesPrivate exact path="/" component={Home} />
        <RoutesPrivate exact path="/dashboard" component={Dashboard} />

        <RoutesPrivate exact path="/dashboardLogitech" component={DashboardLogitech} />
       
       
       
   
        
        <RoutesPrivate exact path="/timeAccess" component={TimeAccess} />
        <RoutesPrivate exact path="/campaignOverview" component={CampaignOverview} />
        <RoutesPrivate exact path="/demography" component={Demograpy} />
        <RoutesPrivate exact path="/salesOverview" component={SalesOverview} />
        <RoutesPrivate exact path="/timeSales" component={TimeSales} />
        <RoutesPrivate exact path="/prodictiveSales" component={ProdictiveSales} />
       
       
        
        <RoutesPrivate exact path="/timeAccessLogitech" component={TimeAccessLogitech} />
        <RoutesPrivate exact path="/campaignOverviewLogitech" component={CampaignOverviewLogitech} />
        <RoutesPrivate exact path="/demographyLogitech" component={DemograpyLogitech} />
        <RoutesPrivate exact path="/salesOverviewLogitech" component={SalesOverviewLogitech} />
        <RoutesPrivate exact path="/timeSalesLogitech" component={TimeSalesLogitech} />
        <RoutesPrivate exact path="/prodictiveSalesLogitech" component={ProdictiveSalesLogitech} />
      
      

      </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;
