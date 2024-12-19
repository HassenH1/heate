import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  MobileStepper,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Stepper from "./Stepper";
import { steps } from "./Steps";

import { YourInformation } from "../YourInformation";
import Error from "./Error";
import { Locations } from "../Locations";
import PositionAndSpecialty from "./PositionAndSpecialty";
import Experience from "./Experience";
import LicensesCertifactions from "./LicensesCertifactions";
import { useThemePaletteMode } from "../../../context/ThemePaletteMode/ThemePaletteMode";
import Logo from "../../../components/logo/Logo";
import { Link } from "react-router-dom";

const ProfessionalSignupApplication = () => {
  const theme = useTheme();
  const { isSystemDarkMode } = useThemePaletteMode();
  const [activeStep, setActiveStep] = useState(0);
  const isMaxBreakpointMd = useMediaQuery((theme) =>
    theme.breakpoints.down("md")
  );

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderApplicationFlow = () => {
    switch (activeStep) {
      case 0:
        return <YourInformation />;
      case 1:
        return <Locations />;
      case 2:
        return <PositionAndSpecialty />;
      case 3:
        return <Experience />;
      case 4:
        return <LicensesCertifactions />;
      case 5:
        return (
          <Box>
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
    <Container maxWidth="xl">
      <Grid container height="100vh">
        <Grid
          size={3}
          display={{ xs: "none", md: "block" }}
          marginY={3}
          borderRadius={theme.shape.borderRadius}
          component={Paper}
          bgcolor={isSystemDarkMode ? theme.palette.primary.main : "#F9FAFC"}
        >
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            marginX={3}
            paddingY={3}
          >
            <Box
              sx={{
                ...(isSystemDarkMode && { filter: "brightness(0) invert(1)" }),
              }}
            >
              <Logo />
            </Box>
            <Stepper activeStep={activeStep} />

            <Button
              variant="outlined"
              {...(isSystemDarkMode && { color: "secondary" })}
              component={Link}
              to="/login"
            >
              Already have an account?
            </Button>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 9 }}
          display="flex"
          flexDirection="column"
          margin={{ xs: "auto", md: "0px" }}
        >
          <Box
            height="100%"
            marginY={3}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            position="relative"
          >
            {renderApplicationFlow()}
            <Box width="60%" position="absolute" bottom={0} height={50}>
              <Paper
                square
                elevation={0}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  bgcolor: "background.default",
                }}
              >
                {!isMaxBreakpointMd ? (
                  <>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      variant="outlined"
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    {activeStep > 0 && (
                      <Button color="info" sx={{ mr: 1 }}>
                        Save
                      </Button>
                    )}
                    <Button
                      onClick={handleNext}
                      variant="contained"
                      disabled={activeStep > steps.length - 1}
                    >
                      {activeStep >= steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </>
                ) : (
                  <MobileStepper
                    variant="text"
                    steps={steps.length}
                    position="bottom"
                    activeStep={activeStep}
                    nextButton={
                      <Button
                        size="medium"
                        color="inherit"
                        onClick={handleNext}
                        disabled={activeStep > steps.length - 1}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        {theme.direction === "rtl" ? (
                          <ChevronLeft />
                        ) : (
                          <ChevronRight />
                        )}
                      </Button>
                    }
                    backButton={
                      <Button
                        size="medium"
                        color="inherit"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                      >
                        {theme.direction === "rtl" ? (
                          <ChevronRight />
                        ) : (
                          <ChevronLeft />
                        )}
                        Back
                      </Button>
                    }
                  />
                )}
              </Paper>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export { ProfessionalSignupApplication };
