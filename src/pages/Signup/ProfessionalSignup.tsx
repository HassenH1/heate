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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Container,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { useTheme } from "@mui/material/styles";

/**
 * @todo fix the icon with 100vh
 */
const ProfessionalSignup = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [userPosition, setUserPosition] = useState("");
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleChange = (event: SelectChangeEvent) => {
    setUserPosition(event.target.value as string);
  };

  return (
    <Container maxWidth="xl">
      <Box display={{ xs: "block", md: "none" }} textAlign="center">
        <img src="/logo.png" style={{ maxWidth: 200 }} />
      </Box>
      <Grid container height="100vh">
        <Grid
          size={4}
          display={{ xs: "none", md: "block" }}
          marginY={3}
          borderRadius={theme.shape.borderRadius}
          color="white"
          sx={{ backgroundColor: theme.palette.primary.main }}
        >
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            sx={{ margin: 2 }}
          >
            <img
              src="/logo.png"
              style={{ maxWidth: 200, filter: "brightness(0) invert(1)" }}
            />
            <Box
              height="70%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Stack spacing={3}>
                <Typography variant="h3" fontWeight={600}>
                  Begin your journey with Heate Health now.
                </Typography>
                <Typography variant="subtitle1" color="">
                  Take control of your schedule and earn more by booking per
                  diem shifts or assignments designed for healthcare
                  professionals like you.
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 8 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box width={450} maxWidth={500}>
            <Typography variant="h3" fontWeight={600}>
              Sign up
            </Typography>
            <Box mt={1} mb={4}>
              <Typography display="inline">Have an account already?</Typography>{" "}
              <MuiLink component={Link} to="/login">
                Login
              </MuiLink>
            </Box>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <InputLabel id="demo-simple-select-label">Position</InputLabel>
              <Select
                labelId="roles"
                id="healthcare-roles"
                value={userPosition}
                label="position"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            {/* <TextField
              id="firstname"
              label="First name"
              variant="outlined"
              fullWidth
              sx={{ mb: 4 }}
            />
            <TextField
              id="lastname"
              label="Last name"
              variant="outlined"
              fullWidth
              sx={{ mb: 4 }}
            /> */}
            <TextField
              id="email"
              label="Email"
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
              onClick={() =>
                navigate("/signup/healthcare-wellness-specialists/application")
              }
            >
              Create an account
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export { ProfessionalSignup };
