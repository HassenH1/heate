import {
  TextField,
  Box,
  Typography,
  Autocomplete,
  Checkbox,
} from "@mui/material";
import { cities } from "./lib/cities";
import ApplicationButtons from "../components/ApplicationButtons";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./lib/schema";

const Locations = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { locations: [] },
  });

  return (
    <Box
      minHeight="100%"
      overflow="auto"
      width={{ xs: "100%", md: "50%" }}
      margin="auto"
      paddingTop={4}
      paddingX={2}
    >
      <Typography variant="h5" component="h3" fontWeight={700} gutterBottom>
        Per diem work opportunities
      </Typography>
      <Typography variant="subtitle1" marginBottom={3}>
        In which areas would you like to work? Choose from the options below to
        secure per day opportunities. We've compiled a list of cities closest to
        you based on your zip code.
      </Typography>
      <Box width="100%">
        <Controller
          name="locations"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <Autocomplete
              multiple
              options={cities}
              disableCloseOnSelect
              onChange={(_, data) => field.onChange(data)}
              renderOption={(props, option, { selected }) => {
                const { key, ...optionProps } = props;
                const handleOnChangeCheckbox = () => {
                  const newSelectedOptions = selected
                    ? field.value?.filter((item) => {
                        return item.label !== option.label;
                      })
                    : [...(field.value as []), option];

                  field.onChange(newSelectedOptions);
                };
                return (
                  <li key={key} {...optionProps}>
                    <Checkbox
                      style={{ marginRight: 8 }}
                      checked={selected}
                      onChange={handleOnChangeCheckbox}
                    />
                    {option.label}
                  </li>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="City"
                  placeholder="Search..."
                  error={!!errors.locations}
                  helperText={errors.locations?.message}
                  sx={{ mb: errors.locations ? "9px" : 4 }}
                />
              )}
            />
          )}
        />
      </Box>
      <ApplicationButtons handleSubmit={handleSubmit} />
    </Box>
  );
};

export { Locations };
