// import { lazy ,Suspense} from 'react';

// const Forms = lazy(() => import('./forms.js'));


// export default function Load()
// {
//     return(
//         <Suspense fallback={<Loading />}>
//         <h2>Preview</h2>
//         <Forms />
//         </Suspense>

//     );
// }
// function Loading()
// {
//     return <p>loading....</p>
// }


// function App() {
//     const [theme, setTheme] = useState('light');
//     // ...
//     return (
//       <ThemeContext.Provider value={theme}>
//         <Page />
//       </ThemeContext.Provider>
//     );
//   }

import React, { Component } from 'react';

function ComponentThatMayThrow() {
    throw new Error('Oops! Something went wrong.');
    return <div>Everything is fine!</div>;
  }
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('Error caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>;
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <ComponentThatMayThrow />
    </ErrorBoundary>
  );
}
