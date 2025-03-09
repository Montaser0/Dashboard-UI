

import Header from "../../components/Header";
import { Box } from "@mui/material";
import Pie from "../../components/Pie";

export default function Bar() {
  return(
    <Box m="20px">
    <Header title="PieChart" subtitle="Simple Pie Chart" />
    <Box height="75vh">
        <Pie />
    </Box>
    </Box>
  )
}
