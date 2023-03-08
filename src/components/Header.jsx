import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { FaReact } from "react-icons/fa";
import Drawer from "@mui/material/Drawer";
import { List } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <AppBar className="sticky" sx={{ backgroundColor: "black", p: 1 }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleToggle}
            sx={{ mr: 2 }}
          >
            <FaReact className="text-sky-400" />
          </IconButton>
          <Typography variant="h6" color="inherit">
            <Link to="/">Hook into React - React Hooksチュートリアル</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="temporary" open={open} onClose={handleToggle}>
        <List sx={{ display: "flex", flexDirection: "column", lineHeight: 3 }}>
          <Accordion
            elevation={0}
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ mx: 2 }} />}>
              <Link to="es6/about" className="hover:text-sky-400 hover:underline">
                React Hooks解説の前に: ES6を知ろう
              </Link>
            </AccordionSummary>
            <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
              <Link to="es6/let-and-const" className="hover:text-sky-400 hover:underline pl-5">
                let と const
              </Link>
              <Link to="es6/template-literals" className="hover:text-sky-400 hover:underline pl-5">
                テンプレート文字列
              </Link>
              <Link to="es6/allow-function" className="hover:text-sky-400 hover:underline pl-5">
                アロー関数
              </Link>
              <Link to="es6/default-parameters" className="hover:text-sky-400 hover:underline pl-5">
                関数のデフォルト引数
              </Link>
              <Link
                to="es6/destructing-assignment"
                className="hover:text-sky-400 hover:underline pl-5"
              >
                分割代入
              </Link>
              <Link to="es6/spread-syntax" className="hover:text-sky-400 hover:underline pl-5">
                スプレッド構文
              </Link>
              <Link to="es6/promise-object" className="hover:text-sky-400 hover:underline pl-5">
                Promiseによる非同期処理
              </Link>
              <Link to="es6/async-and-await" className="hover:text-sky-400 hover:underline pl-5">
                async / await
              </Link>
              <Link
                to="es6/appendix/conditional-operator"
                className="hover:text-sky-400 hover:underline pl-5"
              >
                おまけ: 三項演算子
              </Link>
            </AccordionDetails>
          </Accordion>
          <Accordion
            elevation={0}
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ mx: 2 }} />}>
              <Link to="hooks/about" className="hover:text-sky-400 hover:underline">
                React Hooksとは？
              </Link>
            </AccordionSummary>
            <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
              <Link to="hooks/usestate" className="hover:text-sky-400 hover:underline pl-5">
                useState
              </Link>
              <Link to="hooks/useeffect" className="hover:text-sky-400 hover:underline pl-5">
                useEffect
              </Link>
              <Link to="hooks/useref" className="hover:text-sky-400 hover:underline pl-5">
                useRef
              </Link>
            </AccordionDetails>
          </Accordion>
          <Accordion
            elevation={0}
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ mx: 2 }} />}>
              <p className="hover:text-sky-400 hover:underline">React用語集</p>
            </AccordionSummary>
            <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
              <Link to="glossaries/state" className="hover:text-sky-400 hover:underline pl-5">
                state
              </Link>
              <Link to="glossaries/props" className="hover:text-sky-400 hover:underline pl-5">
                props
              </Link>
              <Link to="glossaries/re-render" className="hover:text-sky-400 hover:underline pl-5">
                再レンダリング
              </Link>
            </AccordionDetails>
          </Accordion>
          <Link to="/references" className="hover:text-sky-400 hover:underline pl-4 py-2">
            参考記事
          </Link>
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;
