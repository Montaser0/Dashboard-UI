import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";
import { mockGeoData as data } from "../data/mockData";
import geoFeatures from "../data/mockGeoFeatures"; // تأكد من وجود ملف GeoJSON
import { Box } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";

export default function GeoChart({isDashboard = false}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" height="500px" width="90%">
      <ResponsiveChoropleth
        data={data}
        features={geoFeatures.features} // ✅ تصحيح الخطأ هنا
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
                strokeWidth: 1,
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
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[0, 1000000]}
        projectionScale = {isDashboard ? 40 : 150}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={isDashboard ? [0.49 , 0.6] : [0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        borderWidth={1.5}
        borderColor="#fff"
      
        legends={
          !isDashboard ? [{
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#444444",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000000",
                  itemOpacity: 1,
                },
              },
            ],
          },] : undefined
  }
      />
    </Box>
  );
}
