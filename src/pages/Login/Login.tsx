import { Eye, EyeClosed } from "lucide-react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  TextField,
  Stack,
  Link as MuiLink,
  Checkbox,
  Grid2 as Grid,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: localStorage.getItem("email") ?? "",
      password: "",
    },
  });
  const [checked, setChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const onSubmit = () => {
    if (checked) {
      if (!localStorage.getItem("email"))
        localStorage.setItem("email", getValues("email"));
    }
    navigate("/dashboard");
  };

  return (
    <Box flexGrow={1}>
      <Grid container direction="column" spacing={5} height="100%">
        <Grid>
          <Container maxWidth="lg" sx={{ mt: 1 }}>
            <Logo />
          </Container>
        </Grid>
        <Grid flexGrow={1}>
          <Container maxWidth="xs">
            <Typography variant="h3" gutterBottom fontWeight={700}>
              Login
            </Typography>
            <Box display="flex">
              <Typography gutterBottom>Hi, welcome back</Typography>
              <Typography className="wave" gutterBottom>
                👋
              </Typography>
            </Box>
            <Card sx={{ minWidth: 275, maxWidth: 475 }}>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        label="Email"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: errors.email ? "9px" : 4 }}
                      />
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        id="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: errors.password ? "9px" : 4 }}
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
                    )}
                  />
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={2}
                  >
                    <FormControlLabel
                      label="Remember me"
                      control={
                        <Checkbox checked={checked} onChange={handleChange} />
                      }
                    />
                    <MuiLink component={Link} to="/forgotpassword">
                      Forgot Password?
                    </MuiLink>
                  </Stack>
                  <Button
                    size="large"
                    variant="contained"
                    fullWidth
                    type="submit"
                  >
                    Login
                  </Button>
                </form>
              </CardContent>
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
