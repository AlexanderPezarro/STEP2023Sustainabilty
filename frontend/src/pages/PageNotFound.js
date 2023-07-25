import React from 'react';
import {Route, Link, Routes, Navigate} from 'react-router-dom';

export default function App() {
  return (
    <>      
        <nav>
          	<ul>
            	<li>
              		<Link to="/">Home</Link>
            	</li>     
	
          	</ul>
        </nav>

        <Routes>
          	<Route path="/" element={<Home />} />
		    <Route path="/404" element={<PageNotFound />} />
          	<Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    </>
  );
}

function Home() {
  	return <p>Home</p>;
}


function PageNotFound() {
  	return (
    	<div>
      		<p>404 Page not found</p>
    	</div>
  	);
}