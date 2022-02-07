import { 
  Typography,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const Bio = () => {
  const rows = [
    {year: 2018, month: 4, bg: "京都外国語大学入学（外国語学部ドイツ語学科）"},
    {year: 2022, month: 3, bg: "京都外国語大学卒業予定"},
  ]

  return (
    <>
      <Typography variant="h2" align="center">
        Bio
      </Typography>
      <TableContainer >
      <TableHead>
        <TableRow>
          <TableCell>Year</TableCell>
          <TableCell>Month</TableCell>
          <TableCell>Background</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, id) => (
          <TableRow key={id}>
            <TableCell>{row.year}</TableCell>
            <TableCell>{row.month}</TableCell>
            <TableCell>{row.bg}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>

    </>
  )
}

export default Bio;