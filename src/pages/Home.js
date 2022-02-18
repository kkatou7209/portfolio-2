import { Container, Box, Fade, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {
  const [show, setShow] = useState(true);

  // useEffect(() => {
  //   setShow(true);
  // }, [])
  return (
    <>
      <Container >
        <Fade in={show} timeout={2000}>
          <Box xs={{display: 'flex'}}>
            <Typography 
              variant="h3" 
              align="center"
              marginBottom="10px"
              fontWeight="light"
            >
              KENSHIRO KATO
            </Typography>
            <Typography 
              variant="h6" 
              align="center" 
              color="gray"
              fontWeight="light"
            >
              Usefull and Easy to Understand
            </Typography>
          </Box>
        </Fade>
      </Container>
    </>
  )
}

export default Home;