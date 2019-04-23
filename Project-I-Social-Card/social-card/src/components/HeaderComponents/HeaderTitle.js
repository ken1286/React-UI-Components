import React from 'react';
// import Moment from 'moment';
import './Header.css';


function HeaderTitle() {
  let date = require('moment');
  
  return (
    
    <div className="header-title">
      <h2>Lamdba School</h2>
      <p>@LambdaSchool · {date().format("DD MMM").toLowerCase()}</p>
    </div>
  );
}

export default HeaderTitle;