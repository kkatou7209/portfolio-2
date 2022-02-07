import {
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';

const Table = ({rows}) => {
  console.log(rows)
  return (
    <>
    <TableContainer >
      <TableHead>
        <TableRow>
          {rows.titles.map((title) => (
            <TableCell>{title}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.contents.map((content, id) => (
          <TableRow key={id}>
            <TableCell>{content.year}</TableCell>
            <TableCell>{content.month}</TableCell>
            <TableCell>{content.bg}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>

    </>
  )
}

export default Table;