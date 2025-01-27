import {
  Box,
  Button,
  Grid2 as Grid,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import Stepper from "./components/Stepper";
import { YourInformation } from "./YourInformation/YourInformation";
import Error from "./components/Error";
import { Locations } from "./Location/Locations";
import PositionAndSpecialty from "./PositionAndSpecialty/PositionAndSpecialty";
import Experience from "./Experience/Experience";
import LicensesCertifactions from "./LicensesCertifactions/LicensesCertifactions";
import Logo from "../../../../components/logo/Logo";
import { Link } from "react-router-dom";
import { useApplication } from "../../../../context/SignupApplication/SignupApplication";

const Application = () => {
  const theme = useTheme();
  const { activeStep } = useApplication();

  const renderApplicationFlow = () => {
    switch (activeStep) {
      case 5:
        return <YourInformation />;
      case 1:
        return <Locations />;
      case 2:
        return <PositionAndSpecialty />;
      case 3:
        return <Experience />;
      case 4:
        return <LicensesCertifactions />;
      case 0:
        return (
          <Box border="1px solid red" height="100%">
            <Typography variant="body1">
              Gotta come up with better design here
            </Typography>
            <Typography
              variant="h3"
              align="center"
              fontWeight={700}
              gutterBottom
            >
              Congrats!!!
            </Typography>
            <Typography variant="body1">
              We are going to review your application and contact you if we have
              any questions
            </Typography>
          </Box>
        );
      default:
        return <Error />;
    }
  };

  return (
    <Grid container height="100%">
      <Grid
        size={{ md: 3 }}
        padding={2}
        display={{ xs: "none", md: "block" }}
        maxHeight="100%"
      >
        <Paper
          component={Box}
          height="100%"
          padding={2}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          elevation={2}
          sx={{
            backgroundColor:
              theme.palette.mode === "light" ? "#F9FAFC" : undefined,
          }}
        >
          <Box flexGrow={1} display="flex" flexDirection="column">
            <Box
              sx={{
                ...(theme.palette.mode === "dark" && {
                  filter: "brightness(0) invert(1)",
                }),
              }}
              maxWidth={200}
              // marginBottom={5}
            >
              <Logo />
            </Box>
            <Box flexGrow={1} display="flex" alignItems="center">
              <Stepper activeStep={activeStep} />
            </Box>
          </Box>
          <Button
            variant="outlined"
            {...(theme.palette.mode === "dark" && { color: "secondary" })}
            component={Link}
            to="/login"
          >
            Already have an account?
          </Button>
        </Paper>
      </Grid>
      <Grid
        container
        size={{ xs: 12, md: 9 }}
        sx={{ height: "100%", overflowX: "auto" }}
        direction="column"
      >
        {renderApplicationFlow()}
      </Grid>
    </Grid>
  );
};

export { Application };
