import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { FaReact } from 'react-icons/fa';
import Drawer from '@mui/material/Drawer';
import { List } from "@mui/material";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <AppBar className="sticky" sx={{ backgroundColor: "black", p: 1 }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleToggle} sx={{ mr: 2 }}>
            <FaReact className="text-sky-400" />
          </IconButton>
          <Typography variant="h6" color="inherit">
            <Link to="/">Hook into React - React Hooksチュートリアル</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer sx={{ width: 400 }} variant="temporary" open={open} onClose={handleToggle}>
        <List sx={{ display: "flex", flexDirection: "column", p: 2, lineHeight: 3 }}>
          <Link to="/about-es6" className="hover:text-sky-400 hover:underline">
            React Hooks解説の前に: ES6を知ろう
          </Link>
          <Link to="/let-and-const" className="hover:text-sky-400 hover:underline pl-5">
            let と const
          </Link>
          <Link to="/allow-function" className="hover:text-sky-400 hover:underline pl-5">
            アロー関数
          </Link>
          <Link to="/destructing-assignment" className="hover:text-sky-400 hover:underline pl-5">
            分割代入
          </Link>
          <Link to="/spread-syntax" className="hover:text-sky-400 hover:underline pl-5">
            スプレッド構文
          </Link>
          <Link to="/about-hooks" className="hover:text-sky-400 hover:underline">
            React Hooksとは？
          </Link>
          <Link to="/usestate" className="hover:text-sky-400 hover:underline pl-5">
            useState
          </Link>
          <Link to="/useeffect" className="hover:text-sky-400 hover:underline pl-5">
            useEffect
          </Link>
          <Link to="/useref" className="hover:text-sky-400 hover:underline pl-5">
            useRef
          </Link>
          <Link to="/glossary" className="hover:text-sky-400 hover:underline">
          🚧 React用語集
          </Link>
          <Link to="/references" className="hover:text-sky-400 hover:underline">
          参考記事
          </Link>
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;
