import { 
  Typography,
} from "@mui/material";

import { Table } from "../layouts";

const Bio = () => {
  const rows = {
    titles: ["Year", "Month", "Background"], 
    contents: [
      {year: 2018, month: 4, bg: "京都外国語大学入学（外国語学部ドイツ語学科）"},
      {year: 2022, month: 3, bg: "京都外国語大学卒業予定"},
    ]
  }

  return (
    <>
      <Typography variant="h2" align="center">
        Bio
      </Typography>
      <Table rows={rows} />
    </>
  )
}

export default Bio;