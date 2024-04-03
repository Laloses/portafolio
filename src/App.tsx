import Grid from "@mui/material/Grid";
import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import portfolioLogo from "/briefcase.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid className="app" container alignContent={"center"}>
      <Grid item xs={6} textAlign={"end"}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={portfolioLogo} className="logo" alt="Portfolio logo" />
        </a>
      </Grid>
      <Grid item xs={6} textAlign={"start"}>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Grid>
      <Grid item xs={12}>
        <h1>Vite + React + Material UI + API</h1>
      </Grid>
      <Grid item xs={12} padding={'2em'}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </Grid>
      <Grid item xs={12}>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Grid>
      <Grid item xs={12}>
        <p style={{color: '#888'}}>
          Click on the Vite and React logos to learn more
        </p>
      </Grid>
    </Grid>
  );
}

export default App;
