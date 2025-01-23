import {
  Box,
  Grid2 as Grid,
  Typography,
  Stack,
  Link as MuiLink,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Checkbox,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { useTheme } from "@mui/material/styles";

/**
 * @todo fix the icon with 100vh
 */
const FacilitySignup = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <Container maxWidth="xl">
      <Box display={{ xs: "block", md: "none" }} textAlign="center">
        <img src="/logo.png" style={{ maxWidth: 256 }} />
      </Box>
      <Grid container height="100vh">
        <Grid
          size={4}
          display={{ xs: "none", md: "block" }}
          marginY={3}
          borderRadius={theme.shape.borderRadius}
          color="white"
          sx={{ backgroundColor: theme.palette.secondary.main }}
        >
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            sx={{ margin: 2 }}
          >
            <img
              src="/logo.png"
              style={{ maxWidth: 256, filter: "brightness(0) invert(1)" }}
            />
            <Box
              height="70%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Stack spacing={3}>
                <Typography variant="h3" fontWeight={600}>
                  Take the first step with us.
                </Typography>
                <Typography variant="subtitle1" color="">
                  Sign up to access verified nurses and healthcare
                  professionals, save on costs, and guarantee complete coverage.
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 8 }}
          display="flex"
          alignItems={{ xs: "normal", md: "center" }}
          justifyContent="center"
        >
          <Box width={500} maxWidth={500}>
            <Typography variant="h3" fontWeight={600}>
              Sign up
            </Typography>
            <Box mt={1} mb={4}>
              <Typography display="inline">Have an account already?</Typography>{" "}
              <MuiLink component={Link} to="/login">
                Login
              </MuiLink>
            </Box>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              sx={{ mb: 4 }}
            >
              <TextField
                id="firstname"
                label="First name"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="lastname"
                label="Last name"
                variant="outlined"
                fullWidth
              />
            </Stack>
            <TextField
              id="facilityname"
              label="Facility name"
              variant="outlined"
              fullWidth
              sx={{ mb: 4 }}
            />
            <TextField
              id="facilitynumber"
              label="Facility number"
              variant="outlined"
              fullWidth
              sx={{ mb: 4 }}
            />
            <TextField
              id="facilityemail"
              label="Facility email"
              variant="outlined"
              fullWidth
              sx={{ mb: 4 }}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              fullWidth
              sx={{ mb: 4 }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <EyeClosed /> : <Eye />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
            <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
              <Checkbox />
              <Typography>
                I agree to the{" "}
                <Typography component={MuiLink}>Terms & Services</Typography>
              </Typography>
            </Box>
            <Button
              size="large"
              variant="contained"
              fullWidth
              color="secondary"
            >
              Create an account
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export { FacilitySignup };
