import React from 'react';

// import { Container } from './styles';

function PreLoader() {
  return (
      <div>
        <div className="flex items-center justify-center background-radial-gradient w-screen h-screen">
            <img src="/assets/logo/logo.png" alt="logo-load" className="w-52 border-blue-500 animate-spin" />
            {/* <div className="w-40 h-40 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div> */}
        </div>
      </div>
  );
}

export default PreLoader;