import React from 'react';

interface ErrorFallbackProps {
  error: Error | null;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <div role="alert">
      <h2>Something went wrong.</h2>
      <p>
        {error ? error.message : 'An unexpected error occurred.'}
      </p>
    </div>
  );
};

export default ErrorFallback;
