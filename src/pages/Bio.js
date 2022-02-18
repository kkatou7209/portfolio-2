import {
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Fade,
  Box
} from '@mui/material';
import { useState } from 'react';

import { bio } from "../dataset";

const Bio = () => {
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
          Bio
        </Typography>
      </Fade>
      <Fade in={show} timeout={2500}>
        <TableContainer 
          sx={{
            width: 'inherit',
            paddingLeft: {sm: '80px', xs: '10px', lg: '200px'},
            
          }}
        >
            <TableHead
            >
              <TableRow>
                {bio.titles.map((title) => (
                  <TableCell>{title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {bio.contents.map((content, id) => (
                <TableRow key={id}>
                  <TableCell>{content.year}</TableCell>
                  <TableCell>{content.month}</TableCell>
                  <TableCell>{content.bg}</TableCell>
                </TableRow>
              ))}
            </TableBody>
        </TableContainer>
      </Fade>
    </>
  )
}

export default Bio;