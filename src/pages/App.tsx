import CssBaseline from "@mui/material/CssBaseline";
import { ThemeAppProvider } from "../context/ThemeContext";
import "../styles/App.css";
import Home from "./home/Home";

function App() {
  return (
    <ThemeAppProvider>
      <CssBaseline />
      <Home />
    </ThemeAppProvider>
  );
}

export default App;
