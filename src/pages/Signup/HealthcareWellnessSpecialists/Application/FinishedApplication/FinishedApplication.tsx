import { Box, Button, Stack, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

function FinishedApplication() {
  return (
    <Box height="100%" paddingTop={4}>
      <Stack
        width={{ md: "70%" }}
        margin="auto"
        spacing={4}
        alignItems="center"
      >
        <Typography variant="h4" component="h3" fontWeight={700} gutterBottom>
          All done!
        </Typography>
        <img
          src="https://plus.unsplash.com/premium_vector-1723274509659-76653ce3a729?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={350}
        />
        <Stack spacing={2}>
          <Typography>
            You've successfully completed your application! Your information has
            been submitted, and a Heate Home healthcare representative will be
            in touch with you soon.
          </Typography>
          <Typography>
            If you have any questions in the meantime, feel free to reach out.
            Thank you for taking this important step in your professional
            healthcare journey!
          </Typography>
        </Stack>
        <Button variant="contained" size="large">
          <MuiLink
            component={Link}
            to="/dashboard"
            underline="none"
            sx={{ color: "inherit" }}
          >
            Go to dashboard
          </MuiLink>
        </Button>
      </Stack>
    </Box>
  );
}

export default FinishedApplication;
