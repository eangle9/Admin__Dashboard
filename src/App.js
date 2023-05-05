import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from './scenes/global/Topbar';
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar/>
        <Sidebar/>
        <div className="app">
          <main className="content">
            
            {/* <Routes>
              <Route path="/" element={<Dashboard/>}/>
            </Routes> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider> 
  );
}

export default App;
