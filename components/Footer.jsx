import React from 'react';

function Footer({message}) {
    return (
      <footer className="bg-gray-900 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </div>
      </footer>
    );
}
  
export default Footer;