import { useRef } from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

const UseRefPage = () => {
  const textRef = useRef(null);
  const [text, setText] = useState("");
  const [textError, setTextError] = useState(false);

  const formValidation = () => {
    let valid = true;

    const isTextRefExists = textRef?.current;
    if (isTextRefExists) {
      const isTextValid = isTextRefExists.validity.valid;
      setTextError(!isTextValid);
      valid &&= isTextValid;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mt-20">
      <p className="text-2xl mb-10">useRef</p>
      <div className="flex flex-col items-center mt-5 mb-20">
        <TextField
          label="Input text"
          inputRef={textRef}
          value={text}
          error={textError}
          helperText={textError && textRef?.current?.validationMessage}
          inputProps={{ required: true }}
          onChange={(event) => setText(event.target.value)}
        />
        <button
          className="bg-black hover:bg-slate-700 text-white font-medium mt-5 py-2 px-4 rounded w-max"
          onClick={() => formValidation()}
        >
          Check Text
        </button>
      </div>
      <Box sx={{width: 800, mb: 10}}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useRefとは？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              useStateと変わらないのでは・・・？🤔
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>useStateとの棲み分け</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default UseRefPage;
