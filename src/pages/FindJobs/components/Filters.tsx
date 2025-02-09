import {
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Slider,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Filters = () => {
  const [sliderVal, setSliderVal] = useState(10);
  return (
    <CardContent>
      <Typography fontWeight={600} gutterBottom>
        Distance {`(${sliderVal} mi)`}
      </Typography>
      <Slider
        size="small"
        defaultValue={10}
        valueLabelDisplay="auto"
        value={sliderVal}
        onChange={(_, value) => setSliderVal(value as number)}
        step={5}
        min={5}
        max={100}
        sx={{ color: "inherit" }}
      />
      <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
      <Typography fontWeight={600} gutterBottom>
        Job category
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Per diem"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Assignments"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="travel"
        />
      </FormGroup>
    </CardContent>
  );
};

export default Filters;
