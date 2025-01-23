import { ReactElement } from "react";
import { Box, StepIconProps, useTheme } from "@mui/material";
import {
  SquareUser,
  MapPinPlus,
  Briefcase,
  School,
  CircleCheck,
} from "lucide-react";

const CustomStepIcon = (props: StepIconProps) => {
  const { completed } = props;
  const {
    palette: {
      success: { main },
    },
  } = useTheme();

  const stepIcons: { [index: string]: ReactElement<unknown> } = {
    1: <SquareUser />,
    2: <MapPinPlus />,
    3: <Briefcase />,
    4: <Briefcase />,
    5: <School />,
  };

  return (
    <Box>
      {completed ? <CircleCheck color={main} /> : stepIcons[String(props.icon)]}
    </Box>
  );
};

export default CustomStepIcon;
