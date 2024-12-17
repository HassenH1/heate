import { CircularProgress, CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import {
  FacilitySignup,
  Login,
  ProfessionalSignup,
  ProfessionalSignupApplication,
  Signup,
} from "./pages";
import { useThemePaletteMode } from "./context/ThemePaletteMode/ThemePaletteMode";

const router = createBrowserRouter([
  { path: "login", Component: Login },
  {
    path: "signup",
    children: [
      { index: true, Component: Signup },
      {
        path: "healthcare-wellness-specialists",
        children: [
          { index: true, Component: ProfessionalSignup },
          { path: "application", Component: ProfessionalSignupApplication },
        ],
      },
      { path: "medical-facility", Component: FacilitySignup },
    ],
  },
  { path: "test", Component: Layout },
]);

const App = () => {
  const { themePaletteMode } = useThemePaletteMode();
  return (
    <ThemeProvider theme={themePaletteMode}>
      <CssBaseline />
      <RouterProvider router={router} fallbackElement={<CircularProgress />} />
    </ThemeProvider>
  );
};

export default App;
