import React from 'react';

function MainContent({ children }) {
  return (
    <main style={{ minHeight: '300px', padding: '24px', background: '#e3ebf6', fontSize: '1.15rem', color: '#222' }}>
      {children}
    </main>
  );
}

export default MainContent;

