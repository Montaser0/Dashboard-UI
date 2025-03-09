import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme"; // استدعاء الألوان من الثيم

export default function Header({ title, subtitle }) { // استقبال props بشكل صحيح
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); // استخراج الألوان من الثيم

  return ( 
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: "30px" }}>
      <Typography variant="h1" color={colors.grey[100]} fontWeight="bold" mb="5px">
        {title}
      </Typography>
      <Typography variant="h4" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
}
