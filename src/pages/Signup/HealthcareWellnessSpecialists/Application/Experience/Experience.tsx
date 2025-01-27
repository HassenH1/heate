import {
  Box,
  Button,
  Typography,
  Stack,
  TextField,
  Paper,
  Checkbox,
  FormControlLabel,
  useTheme,
} from "@mui/material";
import { PlusIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { PatternFormat } from "react-number-format";
import ApplicationButtons from "../components/ApplicationButtons";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useApplication } from "../../../../../context/SignupApplication/SignupApplication";

function Experience() {
  const { userData } = useApplication();
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: { experiences: userData?.experiences ?? [] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });
  const theme = useTheme();
  const parentRef = useRef<HTMLDivElement | null>(null); // need to fix this error?

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          const lastElement =
            mutation.addedNodes[mutation.addedNodes.length - 1];
          (lastElement as HTMLDivElement).scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      });
    });

    if (parentRef.current) {
      observer.observe(parentRef.current, { childList: true });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      width={{ xs: "100%", md: "50%" }}
      paddingTop={4}
      margin={{ md: "0 auto 30px auto" }}
      paddingX={2}
      mb={8}
    >
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Work history
      </Typography>
      <Typography gutterBottom>
        Complete your clinical experience or practice to enhance your earning
        potential. <u>This step is entirely optional</u>.
      </Typography>

      <Stack spacing={3} mt={2} ref={parentRef}>
        {fields.map((item, index) => (
          <Paper key={item.id} component="div" sx={{ padding: 3 }}>
            <Controller
              name={`experiences.${index}.company`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Company"
                  margin="normal"
                />
              )}
            />
            <Controller
              name={`experiences.${index}.title`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Job title"
                  margin="normal"
                />
              )}
            />
            <Stack
              direction={{ xs: "column", md: "row" }}
              columnGap={2}
              alignItems={{ md: "center" }}
            >
              <Controller
                name={`experiences.${index}.startDate`}
                control={control}
                render={({ field }) => (
                  <PatternFormat
                    {...field}
                    format="##/##/####"
                    customInput={TextField}
                    variant="outlined"
                    label="Start date"
                    mask="_"
                    margin="normal"
                  />
                )}
              />
              <Stack direction="row" alignItems="center" columnGap={{ md: 2 }}>
                <Controller
                  name={`experiences.${index}.endDate`}
                  control={control}
                  render={({ field }) => (
                    <PatternFormat
                      {...field}
                      format="##/##/####"
                      customInput={TextField}
                      variant="outlined"
                      label="End date"
                      mask="_"
                      margin="normal"
                    />
                  )}
                />
                <Controller
                  name={`experiences.${index}.present`}
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox {...field} />}
                      label="Present"
                      labelPlacement="bottom"
                    />
                  )}
                />
              </Stack>
            </Stack>
            <Controller
              name={`experiences.${index}.description`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Description"
                  margin="normal"
                  multiline
                  rows={14}
                />
              )}
            />
            <Button
              variant="outlined"
              color="error"
              fullWidth
              onClick={() => remove(index)}
            >
              Remove
            </Button>
          </Paper>
        ))}
      </Stack>
      <Button
        variant="text"
        {...(theme.palette.mode === "dark" && { color: "secondary" })}
        startIcon={<PlusIcon />}
        onClick={() =>
          append({
            company: "",
            title: "",
            startDate: "",
            endDate: "",
            description: "",
          })
        }
        sx={{ marginTop: 2 }}
      >
        Add experience
      </Button>
      <ApplicationButtons
        handleSubmit={handleSubmit}
        values={{ ...getValues() }}
      />
    </Box>
  );
}

export default Experience;
