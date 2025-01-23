import { Box, Typography, IconButton } from "@mui/material";
import { MessageSquare } from "lucide-react";

function Error() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Typography variant="h4" fontWeight={600} align="center">
        Something went wrong...
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
        <Typography variant="subtitle1" align="center">
          Please contact us
        </Typography>
        <IconButton color="primary">
          <MessageSquare />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Error;
