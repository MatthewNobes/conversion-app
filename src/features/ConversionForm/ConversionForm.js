import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const ConversionForm = (props) => {
  const conversionFormat = props.conversionFormat;

  return (
    <Box>
      <Typography variant="h1">Conversion Form - {conversionFormat}</Typography>
      <Typography variant="body1">insert from here</Typography>
    </Box>
  );
};
