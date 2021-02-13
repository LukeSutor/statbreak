import React from 'react'

function Dashboard(props) {
  return (
    <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mx-auto my-auto">
      <path d="M114,206H50c-27.57,0-50,22.43-50,50v206c0,27.57,22.43,50,50,50h64c27.57,0,50-22.43,50-50V256
			C164,228.43,141.57,206,114,206z M124,462c0,5.514-4.486,10-10,10H50c-5.514,0-10-4.486-10-10V256c0-5.514,4.486-10,10-10h64
			c5.514,0,10,4.486,10,10V462z" fill={props.color}/>
      <path d="M462,206H257c-27.57,0-50,22.43-50,50v206c0,27.57,22.43,50,50,50h205c27.57,0,50-22.43,50-50V256
			C512,228.43,489.57,206,462,206z M472,462c0,5.514-4.486,10-10,10H257c-5.514,0-10-4.486-10-10V256c0-5.514,4.486-10,10-10h205
			c5.514,0,10,4.486,10,10V462z" fill={props.color}/>
      <path d="M462,0H50C22.43,0,0,22.43,0,50v64c0,27.57,22.43,50,50,50h412c27.57,0,50-22.43,50-50V50C512,22.43,489.57,0,462,0z
			 M472,114c0,5.514-4.486,10-10,10H50c-5.514,0-10-4.486-10-10V50c0-5.514,4.486-10,10-10h412c5.514,0,10,4.486,10,10V114z" fill={props.color}/>
    </svg>
  );
}

export default Dashboard