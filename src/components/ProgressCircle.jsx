import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = 0.75, size = 60 }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;

  return (
    <Box
      sx={{
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${colors.grey[100]} 40%, transparent 41%), 
                     conic-gradient(${colors.blueAccent[500]} ${angle}deg, ${colors.greenAccent[400]} ${angle}deg 360deg)`,
        boxShadow: `0px 2px 5px rgba(0, 0, 0, 0.15)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* دائرة داخلية بلون الخلفية لخلق تأثير دائري جذاب */}
      <Box
        sx={{
          position: "absolute",
          width: `${size * 0.65}px`,
          height: `${size * 0.65}px`,
          borderRadius: "50%",
          backgroundColor: theme.palette.background.paper,
        }}
      />
      
      {/* نسبة التقدم */}
      <Typography
        variant="caption"
        component="div"
        sx={{
          position: "absolute",
          fontSize: `${size * 0.3}px`,
          fontWeight: "bold",
          color: colors.primary[500],
        }}
      >
        {`${Math.round(progress * 100)}%`}
      </Typography>
    </Box>
  );
};

export default ProgressCircle;
