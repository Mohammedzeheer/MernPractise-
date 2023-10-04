import React, { Suspense } from 'react';

// Define a component that will be lazily loaded
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <h1>Lazy Loading Example</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;


// ----------------------------------------------------------------------

// import React from 'react';

// function LazyComponent() {
//   return <div>This is a lazily loaded component!</div>;
// }

// export default LazyComponent;
