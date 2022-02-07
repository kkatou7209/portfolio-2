import { 
  AppBar, 
  Container, 
  CssBaseline, 
  IconButton, 
  MenuItem, 
  Toolbar,
  Typography,
  Box,
  Button
} from '@mui/material';

import {
  Menu
} from '@mui/icons-material';

import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  Link
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
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
          >
            <Menu />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                sx={{color: 'white', display: 'block', textAlign: 'center'}}
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
