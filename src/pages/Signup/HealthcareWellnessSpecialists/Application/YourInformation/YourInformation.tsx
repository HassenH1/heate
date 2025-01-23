import { Box, Typography, TextField, Stack } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { PatternFormat } from "react-number-format";
import ApplicationButtons from "../components/ApplicationButtons";

// @todo fix error message margins
const YourInformation = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstname: "",
      lastname: "",
      middlename: "",
      birthday: "",
      address: "",
      "suite/apt": "",
      city: "",
      state: "",
      zip: "",
    },
  });

  return (
    <Box
      width={{ md: "50%" }}
      margin={{ md: "0 auto" }}
      paddingTop={4}
      paddingX={2}
      paddingBottom={{ xs: 8, md: 0 }}
    >
      <Typography variant="h5" component="h3" fontWeight={700} gutterBottom>
        Tell us about yourself
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        mb={errors.firstname || errors.lastname ? "9px" : 4}
      >
        <Controller
          name="firstname"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.firstname}
              helperText={errors.firstname?.message}
              label="First name"
              variant="outlined"
              fullWidth
              required
            />
          )}
        />
        <Controller
          name="lastname"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.lastname}
              helperText={errors.lastname?.message}
              label="Last name"
              variant="outlined"
              fullWidth
              required
            />
          )}
        />
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        mb={errors.birthday ? "9px" : 4}
      >
        <Controller
          name="middlename"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="middlename"
              label="Middle name"
              variant="outlined"
              fullWidth
            />
          )}
        />
        <Controller
          name="birthday"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <PatternFormat
              format="##/##/####"
              customInput={TextField}
              variant="outlined"
              fullWidth
              required
              id="birthday"
              label="Birthday"
              error={!!errors.birthday}
              helperText={errors.birthday?.message}
              mask="_"
              inputRef={ref}
              {...rest}
            />
          )}
        />
      </Stack>
      <Controller
        name="address"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            error={!!errors.address}
            helperText={errors.address?.message}
            id="address"
            label="Address"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: errors.address ? "9px" : 4 }}
          />
        )}
      />
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        mb={errors.zip ? "9px" : 4}
      >
        <Controller
          name="suite/apt"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="suite/apt"
              label="Suite/Apt"
              variant="outlined"
              fullWidth
            />
          )}
        />
        <Controller
          name="zip"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.zip}
              helperText={errors.zip?.message}
              id="zipcode"
              label="Zip code"
              variant="outlined"
              fullWidth
              required
            />
          )}
        />
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        mb={errors.city || errors.state ? "9px" : 4}
      >
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.city}
              helperText={errors.city?.message}
              id="city"
              label="City"
              variant="outlined"
              fullWidth
              required
            />
          )}
        />
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.state}
              helperText={errors.state?.message}
              id="state"
              label="State"
              variant="outlined"
              fullWidth
              required
            />
          )}
        />
      </Stack>
      <Controller
        name="phonenumber"
        control={control}
        render={({ field: { ref, ...rest } }) => (
          <PatternFormat
            format="(###) ###-####"
            customInput={TextField}
            variant="outlined"
            required
            id="phonenumber"
            label="Phone number"
            error={!!errors.phonenumber}
            helperText={errors.phonenumber?.message}
            mask="_"
            fullWidth
            inputRef={ref}
            sx={{ mb: errors.phonenumber ? "9px" : 4 }}
            {...rest}
          />
        )}
      />
      <ApplicationButtons handleSubmit={handleSubmit} />
    </Box>
  );
};

export { YourInformation };
