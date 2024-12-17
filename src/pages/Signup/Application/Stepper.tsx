import {
  Step,
  StepLabel,
  Stepper as Steppers,
  Typography,
} from "@mui/material";
import { stepDescription, steps } from "./Steps";
import CustomStepIcon from "./CustomStepIcon";

function Stepper({ activeStep }: { activeStep: number }) {
  return (
    <Steppers activeStep={activeStep} orientation="vertical">
      {steps.map((label, index) => {
        const stepProps: {
          completed?: boolean;
          active?: boolean;
        } = {};
        const labelProps: {
          optional?: React.ReactNode;
        } = {};
        return (
          <Step key={label} {...stepProps}>
            <StepLabel
              {...labelProps}
              slots={{
                stepIcon: CustomStepIcon,
              }}
            >
              <Typography variant="subtitle2" style={{ fontWeight: 700 }}>
                {label}
              </Typography>
              <Typography variant="caption">
                {stepDescription[index]}
              </Typography>
            </StepLabel>
          </Step>
        );
      })}
    </Steppers>
  );
}

export default Stepper;
