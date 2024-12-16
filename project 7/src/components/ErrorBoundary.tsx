import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import { Button } from "@/components/ui/button"; // Update to match your Button component import

export default function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // React Router navigation hook

  const handleError = (error) => {
    setHasError(true);
    setErrorMessage(error.message || "An unexpected error occurred.");
  };

  const handleRetry = () => {
    setHasError(false);
    setErrorMessage("");
  };

  return (
    <div>
      {hasError ? (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <div className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Oops, something went wrong!
            </h1>
            <p className="mt-4 text-muted-foreground">{errorMessage}</p>
            <div className="mt-6">
              <Button
                onClick={handleRetry}
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Try Again
              </Button>
              <Button
                onClick={() => navigate("/")} // Navigate to the homepage
                className="ml-4 inline-flex items-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-muted focus:ring-offset-2"
              >
                Go to Homepage
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
