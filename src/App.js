import { 
  AppBar, 
  Container, 
  CssBaseline, 
  Toolbar,
  Box,
  Button
} from '@mui/material';

import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
} from 'react-router-dom';

import { 
  Home, 
  About,
  Bio,
  Contact 
} from './pages';

import {
  pages
} from './dataset';

function App() {
  return (
    <>
      <CssBaseline />
      <Container sx={{bgcolor: 'rgb(250, 250, 245)', height: '100vh', paddingLeft: 0}}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Box 
              sx={{ flexGrow: 1, display: { xs: 'flex', spacing: 0}}}
              justifyContent='space-between'
            >
              {pages.titles.map((title) => (
                <Button
                  sx={{
                    color: 'black', 
                    display: 'block', 
                    textAlign: 'center',
                  }}
                  href={`/${title}`}
                >
                  {title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box sx={{marginTop: '40px'}}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes> 
          </Router>
        </Box>
      </Container>
    </>
  );
}

export default App;
