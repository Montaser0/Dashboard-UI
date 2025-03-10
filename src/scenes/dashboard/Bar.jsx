import { useTheme } from "@mui/material/styles";


import Header from "../../components/Header";
import { Box } from "@mui/material";
import { tokens } from "../../theme";
import BarChart from "../../components/BarChart";

export default function Bar() {
  return(
    <Box m="20px">
    <Header title="BarChart" subtitle="Simple Bar Chart" />
    <Box height="75vh">
        <BarChart />
    </Box>
    </Box>
  )
}
