import React from 'react';
require('dotenv').config()
const CallAPI = () => {
  process.env.REACT_APP_DATE_FISRT_GET_TOKEN = "123";
  return (
    <div>
      123
      {console.log(process.env.REACT_APP_DATE_FISRT_GET_TOKEN)}
    </div>
  );
}

export default CallAPI;