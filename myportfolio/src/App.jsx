import React, { useState } from 'react';
import Portfolio from './Portfolio';
import ProjectSamples from './ProjectSamples';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      {page === 'home' ? (
        <Portfolio onViewWork={() => setPage('projects')} />
      ) : (
        <ProjectSamples onBack={() => setPage('home')} />
      )}
    </>
  )
}

export default App
