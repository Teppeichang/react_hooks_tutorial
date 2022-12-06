import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { FaReact } from 'react-icons/fa';
import Drawer from '@mui/material/Drawer';
import { List } from "@mui/material";
import Top from "./pages/Top";
import UseStatePage from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";
import AboutHooks from "./pages/AboutHooks";

function App() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open)
}

  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor: 'black'}}>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleToggle} sx={{ mr: 2 }}>
              <FaReact className="text-sky-400"/>
            </IconButton>
            <Typography variant="h6" color="inherit">
              <Link to="/">React Hooks Tutorial</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer sx={{ width: 400 }} variant="temporary" open={open} onClose={handleToggle}>
          <List sx={{ display: 'flex', flexDirection: 'column', p: 2, lineHeight: 3 }}>
            <Link to="/about-hooks" className="hover:text-sky-400 hover:underline">React Hooksとは？</Link>
            <Link to="/usestate" className="hover:text-sky-400 hover:underline">useState</Link>
            <Link to="/useeffect" className="hover:text-sky-400 hover:underline">useEffect</Link>
          </List>
        </Drawer>
      </Box>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/usestate" element={<UseStatePage />} />
        <Route path="/useeffect" element={<UseEffectPage />} />
        <Route path="/about-hooks" element={<AboutHooks />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
