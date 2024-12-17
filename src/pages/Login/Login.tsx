import { Eye, EyeClosed } from "lucide-react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
  TextField,
  Stack,
  Link as MuiLink,
  Checkbox,
  Grid2 as Grid,
  FormGroup,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <Box flexGrow={1}>
      <Grid container direction="column" spacing={5} height="100%">
        <Grid>
          <Container maxWidth="lg" sx={{ mt: 1 }}>
            <img
              src="/logo.png"
              style={{ maxWidth: 256, display: "flex", alignItems: "center" }}
            />
          </Container>
        </Grid>
        <Grid flexGrow={1}>
          <Container maxWidth="xs">
            <Typography variant="h3" gutterBottom fontWeight={700}>
              Login
            </Typography>
            <Typography gutterBottom>
              Hi, welcome back <Typography className="wave">👋</Typography>
            </Typography>
            <Card sx={{ minWidth: 275, maxWidth: 475 }}>
              <CardContent>
                <TextField
                  error={error}
                  helperText={
                    error && (
                      <Typography variant="caption">
                        Invalid email address
                      </Typography>
                    )
                  }
                  id="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: error ? "10px" : 4 }}
                />
                <TextField
                  error={error}
                  helperText={
                    error && (
                      <Typography variant="caption">
                        Invalid email address
                      </Typography>
                    )
                  }
                  id="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: error ? "10px" : 4 }}
                  type={showPassword ? "text" : "password"}
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
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="Remember me"
                    />
                  </FormGroup>
                  <MuiLink component={Link} to="/forgotpassword">
                    Forgot Password?
                  </MuiLink>
                </Stack>
              </CardContent>
              <CardActions sx={{ p: "0px 16px 16px 16px" }}>
                <Button size="large" variant="contained" fullWidth>
                  Login
                </Button>
              </CardActions>
            </Card>
            <Box mt={3} textAlign="center">
              <Typography display="inline">Not registered yet?</Typography>{" "}
              <MuiLink component={Link} to="/signup">
                Create an account
              </MuiLink>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

export { Login };
