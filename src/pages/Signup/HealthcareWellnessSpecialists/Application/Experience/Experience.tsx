import {
  Box,
  Button,
  Typography,
  Stack,
  TextField,
  Paper,
  Checkbox,
  FormGroup,
  FormControlLabel,
  useTheme,
} from "@mui/material";
import { PlusIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PatternFormat } from "react-number-format";
import ApplicationButtons from "../components/ApplicationButtons";

function Experience() {
  const theme = useTheme();
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [experiences, setExperiences] = useState<
    Array<{
      id: string;
      company: string;
      title: string;
      startDate: string;
      endDate: string;
      responsibilities: string;
    }>
  >([]);

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: crypto.randomUUID(),
        company: "",
        title: "",
        startDate: "",
        endDate: "",
        responsibilities: "",
      },
    ]);
  };

  const handleRemove = (id: string) => {
    const filteredExperience = experiences.filter(
      (experience) => experience.id !== id
    );
    setExperiences(filteredExperience);
  };

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
        {experiences.map((experience) => (
          <Paper key={experience.id} component="div" sx={{ padding: 3 }}>
            <Typography>Id: {experience.id}</Typography>
            <TextField fullWidth label="Company" margin="normal" />
            <TextField fullWidth label="Job title" margin="normal" />
            <Stack
              direction={{ xs: "column", md: "row" }}
              columnGap={2}
              alignItems={{ md: "center" }}
            >
              <PatternFormat
                format="##/##/####"
                customInput={TextField}
                variant="outlined"
                label="Start date"
                mask="_"
                margin="normal"
              />
              <Stack direction="row" alignItems="center" columnGap={{ md: 2 }}>
                <PatternFormat
                  format="##/##/####"
                  customInput={TextField}
                  variant="outlined"
                  label="End date"
                  mask="_"
                  margin="normal"
                />
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Present"
                    labelPlacement="bottom"
                  />
                </FormGroup>
              </Stack>
            </Stack>
            <TextField
              fullWidth
              label="Responsibilities"
              margin="normal"
              multiline
              rows={14}
            />
            <Button
              variant="outlined"
              color="error"
              fullWidth
              onClick={() => handleRemove(experience.id)}
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
        onClick={addExperience}
        sx={{ marginTop: 2 }}
      >
        Add experience
      </Button>
      <ApplicationButtons />
    </Box>
  );
}

export default Experience;
