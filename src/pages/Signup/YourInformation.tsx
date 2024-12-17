import { Box, Typography, TextField, Stack } from "@mui/material";

const YourInformation = () => {
  return (
    <Box width={{ xs: "100%", md: "60%" }} margin="auto">
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Tell us about yourself
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={3} mb={4}>
        <TextField
          id="firstname"
          label="First name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          id="lastname"
          label="Last name"
          variant="outlined"
          fullWidth
          required
        />
      </Stack>
      <Stack direction={{ xs: "column", md: "row" }} spacing={3} mb={4}>
        <TextField
          id="middlename"
          label="Middle name"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          id="birthday"
          label="Birthday"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 4 }}
        />
      </Stack>
      <TextField
        id="address"
        label="Address"
        variant="outlined"
        fullWidth
        required
        sx={{ mb: 4 }}
      />
      <Stack direction={{ xs: "column", md: "row" }} spacing={3} mb={4}>
        <TextField
          id="suite/apt"
          label="Suite/Apt"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          id="zipcode"
          label="Zip code"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
        />
      </Stack>
      <Stack direction={{ xs: "column", md: "row" }} spacing={3} mb={4}>
        <TextField
          id="city"
          label="City"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          id="state"
          label="State"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
        />
      </Stack>
      <TextField
        id="phonenumber"
        label="Phone number"
        variant="outlined"
        fullWidth
        required
        sx={{ mb: 4 }}
      />
    </Box>
  );
};

export { YourInformation };
