import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import MySidebar from "./scenes/global/MySidebar";
import Dashboard from "./scenes/dashboard";
import React from "react";
import Team from "./scenes/team";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <MySidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              {/*<Route path="/invoices" element={<Dashboard/>}/>
            <Route path="/contacts" element={<Dashboard/>}/>
            <Route path="/bar" element={<Dashboard/>}/>
            <Route path="/form" element={<Dashboard/>}/>
            <Route path="/line" element={<Dashboard/>}/>
            <Route path="/pie" element={<Dashboard/>}/>
            <Route path="/faq" element={<Dashboard/>}/>
            <Route path="/geography" element={<Dashboard/>}/>
            <Route path="/calendar" element={<Dashboard/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
