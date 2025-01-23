import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { PlusIcon, CircleX } from "lucide-react";
import { useState } from "react";
import { XCircle } from "lucide-react";
import {
  imagingSpecialties,
  lpnLvnSpecialties,
  rnSpecialties,
  positions,
  paSpecialties,
  cnaSpecialties,
  medTechSpecialties,
  therapistSpecialties,
} from "./components/listOfPositionsAndSpecialties";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm, useWatch } from "react-hook-form";
import {
  dataSchema,
  schema,
  type PositionAndSpecialtyType,
} from "./components/schema";
import ApplicationButtons from "../components/ApplicationButtons";

function PositionAndSpecialty() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Array<PositionAndSpecialtyType>>([]);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PositionAndSpecialtyType>({
    resolver: yupResolver(schema),
    defaultValues: {
      position: { label: "", id: 0 },
      yearsOfExperience: "",
      specialty: { label: "", value: "" },
    },
  });
  const {
    handleSubmit: dataHandleSubmit,
    formState: { errors: dataErrors },
    setValue,
  } = useForm({
    resolver: yupResolver(dataSchema),
    defaultValues: {
      positionSpecialty: [],
    },
  });
  const watchPosition = useWatch({ control, name: "position" });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = (selected: PositionAndSpecialtyType) => {
    const { position, specialty, yearsOfExperience } = selected;
    const filteredData = data.filter(
      (each) =>
        each.position.label !== position.label ||
        each.specialty.label !== specialty.label ||
        each.yearsOfExperience !== yearsOfExperience
    );
    setData(filteredData);
  };
  const handleDynamicOptions = () => {
    const { label } = watchPosition;
    switch (label) {
      case "LVN/LPN":
        return lpnLvnSpecialties;
      case "Imagine services":
        return imagingSpecialties;
      case "Registered nurse":
        return rnSpecialties;
      case "Physician assistant":
        return paSpecialties;
      case "Certified Nursing Assistant":
        return cnaSpecialties;
      case "Techs":
        return medTechSpecialties;
      case "Therapist":
        return therapistSpecialties;
      default:
        return [];
    }
  };
  const handleSave = (data: PositionAndSpecialtyType) => {
    setData((prev) => {
      setValue("positionSpecialty", [...prev, data]);
      return [...prev, data];
    });
    handleClose();
    reset();
  };

  return (
    <>
      <Box
        width={{ xs: "100%", md: "50%" }}
        margin={{ md: "0 auto" }}
        paddingTop={4}
        paddingX={2}
      >
        <Typography variant="h5" component="h3" fontWeight={700} gutterBottom>
          Position and Specialty
        </Typography>
        <Typography gutterBottom>
          Add all the positions you have experience working in.{" "}
          <Typography
            component="u"
            color={dataErrors.positionSpecialty?.message ? "error" : undefined}
          >
            This step is required
          </Typography>
          .
        </Typography>
        {data.length > 0 && (
          <Stack spacing={2}>
            {data.map((data, index) => (
              <Paper
                key={index}
                square={false}
                sx={{
                  paddingX: 3,
                  height: 100,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box display="flex" flexDirection="column">
                  <Typography variant="body1" gutterBottom fontWeight={600}>
                    {data.position.label}
                  </Typography>
                  <Typography variant="caption">
                    {data.specialty.label}
                  </Typography>
                  <Typography variant="caption">
                    {data.yearsOfExperience} of experience
                  </Typography>
                </Box>
                <IconButton onClick={() => handleDelete(data)}>
                  <CircleX color={theme.palette.error.main} />
                </IconButton>
              </Paper>
            ))}
          </Stack>
        )}
        <Button
          variant="text"
          {...(theme.palette.mode === "dark" && { color: "secondary" })}
          startIcon={<PlusIcon />}
          onClick={handleOpen}
          sx={{ marginTop: 2 }}
        >
          Add position/specialty
        </Button>
        <ApplicationButtons handleSubmit={dataHandleSubmit} />
      </Box>
      <Dialog
        open={open}
        fullWidth
        maxWidth="sm"
        onClose={handleClose}
        closeAfterTransition={false}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Select a position, year of experience and a specialty
        </DialogTitle>
        <IconButton
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <XCircle color={theme.palette.grey[500]} />
        </IconButton>
        <DialogContent dividers>
          <Controller
            name="position"
            control={control}
            render={({ field: { onChange, ...rest } }) => (
              <Autocomplete
                {...rest}
                options={positions}
                onChange={(_, data) => onChange(data)}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    margin="normal"
                    label="Position"
                    error={!!errors.position}
                  />
                )}
              />
            )}
          />
          <Controller
            name="yearsOfExperience"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth margin="normal">
                <InputLabel
                  id="demo-simple-select-label"
                  error={!!errors.yearsOfExperience}
                >
                  Years of experience
                </InputLabel>
                <Select
                  label="Years of experience"
                  error={!!errors.yearsOfExperience}
                  {...field}
                >
                  <MenuItem value="less than 1 year">Less than 1 year</MenuItem>
                  <MenuItem value="1 year">1 year</MenuItem>
                  <MenuItem value="2 years">2 years</MenuItem>
                  <MenuItem value="3 years">3 years</MenuItem>
                  <MenuItem value="4 years">4 years</MenuItem>
                  <MenuItem value="5 years">5 years</MenuItem>
                  <MenuItem value="6 years">6 years</MenuItem>
                  <MenuItem value="7 years">7 years</MenuItem>
                  <MenuItem value="8 years">8 years</MenuItem>
                  <MenuItem value="9 years">9 years</MenuItem>
                  <MenuItem value="10 or more years">10 or more years</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name="specialty"
            control={control}
            render={({ field: { onChange, ...rest } }) => (
              <Autocomplete
                {...rest}
                options={handleDynamicOptions()}
                disabled={watchPosition.label === ""}
                onChange={(_, data) => onChange(data)}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    margin="normal"
                    label="Specialty"
                    error={!!errors.specialty}
                  />
                )}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="error">
            Cancel
          </Button>
          <Button
            autoFocus
            onClick={handleSubmit(handleSave)}
            variant="contained"
            color="success"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default PositionAndSpecialty;
