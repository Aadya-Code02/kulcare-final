import { ThemeProvider } from "./components/theme-provider";
import AppRoutes from "./routes/app-routes";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="mainbackground">
        <AppRoutes />
      </div>
    </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
