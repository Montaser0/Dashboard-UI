import "./App.css";
import Tabbar from "./scenes/dashboard/global/Tabbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/dashboard/global/Sidebar";
import Dashboard from "./scenes/dashboard"; 
import Team from "./components/Team.jsx"; 
import Contact from "./components/Contact.jsx"; 
import Invoices from "./components/Invoices.jsx"; 
import Form from "./components/Form.jsx"; 
import Bar from "./scenes/dashboard/Bar.jsx"; 
import Pie from "./scenes/dashboard/Pie.jsx"; 
import Line from "./scenes/dashboard/Line.jsx"; 
import FAQ from "./components/FAQ.jsx";
// import Geography from "./scenes/dashboard/Geography.jsx"; 
import Calendar from "./components/Calendar.jsx"; 
function App() {
  const {theme, colorMode} = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        {/* <Sidebar /> */}
        <Sidebar />
        <main className="content">
          <Tabbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/faq" element={<FAQ />} />
            {/* <Route path="/geography" element={<Geography />} /> */}
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
