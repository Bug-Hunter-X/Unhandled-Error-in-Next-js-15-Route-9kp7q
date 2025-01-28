```javascript
// pages/about.js
import { ErrorBoundary } from 'next/error-boundary';

function MyErrorBoundary({ error }) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p> // Display the error message
    </div>
  );
}

export default function About() {
  // This will cause an error if not handled correctly
  throw new Error('Intentional error for demonstration.');
}

function AboutPage(){
  return (
    <ErrorBoundary errorComponent={MyErrorBoundary}>
        <About/>
    </ErrorBoundary>
  );
}
export default AboutPage;
```