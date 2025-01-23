import {
  Button,
  MobileStepper,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { steps } from "./Steps";
import { useApplication } from "../../../../../context/SignupApplication/SignupApplication";
import { type UseFormHandleSubmit, type FieldValues } from "react-hook-form";

function ApplicationButtons({
  handleSubmit,
}: {
  handleSubmit?: UseFormHandleSubmit<FieldValues>;
}) {
  const theme = useTheme();
  const { activeStep, handleBack, handleNext } = useApplication();
  const isMaxBreakpointMd = useMediaQuery((theme) =>
    theme.breakpoints.down("md")
  );

  const handleNextClick = () => {
    if (handleSubmit) {
      handleSubmit(handleNext)();
    } else {
      handleNext();
    }
  };

  if (isMaxBreakpointMd) {
    return (
      <MobileStepper
        variant="text"
        steps={steps.length}
        position="bottom"
        activeStep={activeStep}
        nextButton={
          <Button
            size="medium"
            color="inherit"
            onClick={handleNextClick}
            disabled={activeStep > steps.length - 1}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
            {theme.direction === "rtl" ? <ChevronLeft /> : <ChevronRight />}
          </Button>
        }
        backButton={
          <Button
            size="medium"
            color="inherit"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
            Back
          </Button>
        }
      />
    );
  }

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      marginY={2}
    >
      <Button
        color="inherit"
        disabled={activeStep === 0}
        onClick={handleBack}
        variant="outlined"
      >
        Back
      </Button>
      <Box>
        {activeStep > 0 && (
          <Button color="info" sx={{ mr: 1 }}>
            Save
          </Button>
        )}
        <Button
          onClick={handleNextClick}
          variant="contained"
          disabled={activeStep > steps.length - 1}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default ApplicationButtons;
