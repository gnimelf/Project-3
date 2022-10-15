import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Login from './pages/Login';
import Review from './pages/Review';
import SignUp from './pages/SignUp';

export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Review') {
      return < Review/>;
    }
    if (currentPage === 'SignUp') {
      return <SignUp />;
    }
    return <Login />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}

