import { ThemeProvider } from "./components/theme-provider";
import AppRoutes from "./routes/app-routes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
<div className="mainbackground" >
  <AppRoutes />
</div>     
    </ThemeProvider>
  );
}

export default App;
