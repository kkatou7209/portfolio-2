import { 
  Typography,
  Fade 
} from "@mui/material";

import {
   useState,
  } from "react";

const Contact = () => {
  const [show] = useState(true);

  return (
    <>
      <Fade in={show} timeout={2000}>
        <Typography
          variant="h3"
          align="center"
          fontWeight="light"
          marginBottom="30px"
        >
          Contact
        </Typography>
      </Fade>
    </>
  )
}

export default Contact;