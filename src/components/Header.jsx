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
        <List sx={{ display: "flex", flexDirection: "column", lineHeight: 2 }}>
          <Accordion
            elevation={0}
            defaultExpanded={true}
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ mx: 2 }} />}>
              <Typography>
                React Hooks解説の前に: ES6記法解説
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
              <Link to="es6/about" className="hover:text-sky-400 hover:underline pl-5">
                ES6(ES2015)とは
              </Link>
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
            defaultExpanded={true}
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ mx: 2 }} />}>
            <Typography>React Hooks実例&解説</Typography>
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
              <Link to="hooks/usecontext" className="hover:text-sky-400 hover:underline pl-5">
                useContext
              </Link>
              <Link to="hooks/usecallback" className="hover:text-sky-400 hover:underline pl-5">
                useCallback
              </Link>
              <Link to="hooks/usememo" className="hover:text-sky-400 hover:underline pl-5">
                🚧 useMemo
              </Link>
            </AccordionDetails>
          </Accordion>
          <Accordion
            elevation={0}
            defaultExpanded={true}
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ mx: 2 }} />}>
              <p className="hover:text-sky-400 hover:underline">React頻出用語集</p>
            </AccordionSummary>
            <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
              <Link to="glossaries/hooks" className="hover:text-sky-400 hover:underline pl-5">
                React Hooks(フック)
              </Link>
              <Link to="glossaries/state" className="hover:text-sky-400 hover:underline pl-5">
                state
              </Link>
              <Link to="glossaries/props" className="hover:text-sky-400 hover:underline pl-5">
                props
              </Link>
              <Link to="glossaries/re-render" className="hover:text-sky-400 hover:underline pl-5">
                再レンダリング
              </Link>
              <Link to="glossaries/side-effect" className="hover:text-sky-400 hover:underline pl-5">
                副作用
              </Link>
            </AccordionDetails>
          </Accordion>
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;
