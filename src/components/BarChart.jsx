import { useTheme } from "@mui/material/styles";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";
import Header from "./Header";
import { Box } from "@mui/material";

export default function BarChart({isDashboard =false}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box height="500px" width="90%" m="20px" overflow= "hidden">

<ResponsiveBar
  data={data}
  keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
  indexBy="country"
  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
  padding={0.25}
  valueScale={{ type: "linear" }}
  indexScale={{ type: "band", round: true }}
  colors={{ scheme: "nivo" }}
  borderColor={colors.grey[100]}
  labelTextColor={colors.grey[100]}
  axisTop={null}
  axisRight={null}
  axisBottom={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend:isDashboard?undefined: "country",
    legendPosition: "middle",
    legendOffset: 32,
    tickColor: colors.grey[100],
    legendTextColor: colors.grey[100],
  }}
  axisLeft={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend:isDashboard?undefined: "food",
    legendPosition: "middle",
    legendOffset: -40,
    tickColor: colors.grey[100],
    legendTextColor: colors.grey[100],
  }}
  legends={[
    {
      dataFrom: "keys",
      anchor: "bottom-right",
      direction: "column",
      justify: false,
      translateX: 120,
      translateY: 0,
      itemsSpacing: 2,
      itemWidth: 100,
      itemHeight: 20,
      itemDirection: "left-to-right",
      itemOpacity: 0.85,
      symbolSize: 20,
      textColor: colors.grey[100], // تعديل لون النص في الأسطورة
      effects: [
        {
          on: "hover",
          style: {
            itemOpacity: 1,
          },
        },
      ],
    },
  ]}
  theme={{
    axis: {
      domain: {
        line: {
          stroke: colors.grey[100],
        },
      },
      legend: {
        text: {
          fill: colors.grey[100],
        },
      },
      ticks: {
        line: {
          stroke: colors.grey[100],
        },
        text: {
          fill: colors.grey[100],
        },
      },
    },
    legends: {
      text: {
        fill: colors.grey[100],
      },
    },
  }}
  role="application"
  ariaLabel="Nivo bar chart demo"
  barAriaLabel={(e) => `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`}
/>

    </Box>
  );
}
