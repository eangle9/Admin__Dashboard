import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from './scenes/global/Topbar';
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/manage team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Calendar from "./scenes/calendar";
import Faq from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geo from "./scenes/geo";

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
            <Routes>
              <Route path="/" element={<Dashboard/>} />
               <Route path="/team" element={<Team/>} /> 
               <Route path="/contacts" element={<Contacts/>} />
               <Route path="/invoices" element={<Invoices/>} />
               <Route path="/calendar" element={<Calendar/>} />
               <Route path="/faq" element={<Faq/>} />
               <Route path="/bar" element={<Bar/>} />
               <Route path="/pie" element={<Pie/>} />
               <Route path="/line" element={<Line/>} />
               <Route path="/geography" element={<Geo/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider> 
  );
}

export default App;
