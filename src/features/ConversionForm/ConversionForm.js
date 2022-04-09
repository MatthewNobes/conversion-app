import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const ConversionForm = (props) => {
  const conversionFormat = props.conversionFormat;

  return (
    <Box>
      <Typography>Conversion Form - {conversionFormat}</Typography>
    </Box>
  );
};
