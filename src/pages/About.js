import { 
  Container,
  Typography,
  Fade
} from "@mui/material";
import { useState } from "react";

const About = () => {
  const [show] = useState(true);



  return (
    <>
    <Container>
      <Fade in={show} timeout={2000}>
        <Typography 
          variant="h3" 
          align="center"
          fontWeight="light"
          marginBottom="30px" 
        >
          About
        </Typography>
      </Fade>
    </Container>
    </>
  )
}

export default About;