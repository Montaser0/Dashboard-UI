import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";

export default function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box p={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Overview of your business" />

        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <CloudDownloadIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12,1fr)",
          gridAutoRows: "140px",
          gap: "20px",
        }}
      >
        {/* ROW 1 */}
        {[
          { title: "12,360", subtitle: "Emails Sent", progress: 0.75, increase: "+14%", icon: <EmailOutlinedIcon /> },
          { title: "431,322", subtitle: "Total Sales", progress: 0.5, increase: "+14%", icon: <PointOfSaleIcon /> },
          { title: "32,441", subtitle: "New Customers", progress: 0.3, increase: "+5%", icon: <PersonAddIcon /> },
          { title: "1,325,134", subtitle: "Traffic Inbound", progress: 0.8, increase: "+43%", icon: <TrafficIcon /> },
        ].map((stat, index) => (
          <Box
            key={index}
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={stat.title}
              subtitle={stat.subtitle}
              progress={stat.progress}
              increase={stat.increase}
              icon={React.cloneElement(stat.icon, {
                sx: { fontSize: "24px", color: colors.greenAccent[600] },
              })}
            />
          </Box>
        ))}

        {/* ROW 2 */}
        <Box gridColumn="span 8" gridRow="span 3" backgroundColor={colors.primary[400]}>
          <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" sx={{ color: colors.grey[100], fontWeight: "600" }}>
                Revenue Generated
              </Typography>
              <Typography variant="h3" sx={{ color: colors.greenAccent[500], fontWeight: "500" }}>
                $59,342,32
              </Typography>
            </Box>
            <IconButton>
              <CloudDownloadIcon sx={{ fontSize: "26px", color: colors.greenAccent[500] }} />
            </IconButton>
          </Box>
          <Box p="0 20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box gridColumn="span 4" gridRow="span 3" p="0 20px" backgroundColor={colors.primary[400]} overflow="auto">
          <Box borderBottom={`4px solid ${colors.primary[500]}`} p="15px">
            <Typography variant="h5" sx={{ color: colors.grey[100], fontWeight: "600" }}>
              Recent Transactions
            </Typography>
          </Box>

          {mockTransactions.map((transaction, i) => (
            <Box
              key={i}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="15px"
              borderBottom={`2px solid ${colors.primary[500]}`}
            >
              <Box display="flex" alignItems="center" gap="20px">
                <Typography variant="h5" sx={{ color: colors.greenAccent[500], fontWeight: "600" }}>
                  {transaction.user}
                </Typography>
                <Typography variant="h6" sx={{ color: colors.grey[100] }}>
                  {transaction.date}
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ backgroundColor: colors.greenAccent[500], fontWeight: "600", p: "10px" }}>
                ${transaction.cost}
              </Typography>
            </Box>
          ))}
        </Box>
    
      </Box>
    </Box>
  );
}