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
  FormControlLabel,
  Autocomplete,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { useTheme } from "@mui/material/styles";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "../../../components/logo/Logo";
import { positions } from "./Application/PositionAndSpecialty/components/listOfPositionsAndSpecialties";
import { useApplication } from "../../../context/SignupApplication/SignupApplication";

const schema = yup
  .object({
    position: yup
      .object()
      .shape({
        label: yup.string().required("position is a required field"),
        id: yup.number().required(),
      })
      .required(),
    email: yup.string().email("Invalid email format").required(),
    password: yup.string().required(),
    terms: yup.boolean().default(false).oneOf([true]).required(),
  })
  .required();

const ProfessionalSignup = () => {
  const { setUserData } = useApplication();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      terms: false,
      email: "",
      password: "",
      position: { label: "", id: 0 },
    },
  });

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const onSubmit = () => {
    setUserData((prev) => ({
      ...prev,
      signup: getValues(),
    }));
    navigate("application");
  };

  return (
    <Container maxWidth="xl">
      <Box display={{ xs: "block", md: "none" }} textAlign="center">
        <Logo />
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
            <Logo style={{ filter: "brightness(0) invert(1)" }} />
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="position"
                control={control}
                render={({ field: { onChange, ...rest } }) => (
                  <Autocomplete
                    {...rest}
                    options={positions}
                    onChange={(_, data) => onChange(data)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={!!errors.position}
                        helperText={errors.position?.label?.message}
                        label="Position"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: errors.position ? "9px" : 4 }}
                      />
                    )}
                  />
                )}
              />
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
              <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
                <Controller
                  control={control}
                  name="terms"
                  render={({ field }) => (
                    <FormControlLabel
                      checked={field.value}
                      inputRef={field.ref}
                      label={
                        <Typography>
                          I agree to the{" "}
                          <Typography component={MuiLink}>
                            Terms & Services
                          </Typography>
                        </Typography>
                      }
                      control={<Checkbox />}
                      {...field}
                    />
                  )}
                />
              </Box>
              <Button type="submit" size="large" variant="contained" fullWidth>
                Create an account
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export { ProfessionalSignup };
