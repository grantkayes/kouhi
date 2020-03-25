import React, { useState } from 'react';
import './Dashboard.css';
import Analytics from './Analytics';

function Dashboard() {
  const [navigateAnalytics, setNavigateAnalytics] = useState(false);

  if (!navigateAnalytics) {
    return (
      <div className="Dashboard">
        <div className="card-wrapper">
          <h1 style={{"color": "#000000"}}> Analytics </h1>
          <a href="#"><div class="card"></div></a>
        </div>
        <div className="card-wrapper">
          <h1 style={{"color": "#000000"}}> Recommendation </h1>
          <a href="#" onClick={() => setNavigateAnalytics(true)}><div class="card"></div></a>
        </div>     
        <div className="card-wrapper">
          <h1 style={{"color": "#000000"}}> Time </h1>
          <a href="#"><div class="card"></div></a>
        </div>
      </div>
    );
  } else {
    return (
      <div><Analytics/></div>
    );
  }


}

export default Dashboard;
