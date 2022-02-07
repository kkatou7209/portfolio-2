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

function App() {
  const pages = ['about', 'bio', 'contact'];
  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                sx={{
                  color: 'black', 
                  display: 'block', 
                  textAlign: 'center',
                  paddingRight: '70px'
                }}
                href={`/${page}`}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> 
        </Router>
      </Container>
    </>
  );
}

export default App;
