
import Header from "../../components/Header";
import { Box } from "@mui/material";
import GeoChart from "../../components/GeoChart";

export default function Geography() {
  return(
    <Box m="20px">
    <Header title="GeoChart" subtitle="Simple Geo Chart" />
    <Box height="75vh">
        <GeoChart />
    </Box>
    </Box>
  )
}
