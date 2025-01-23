import { CircularProgress, CssBaseline, ThemeProvider } from "@mui/material";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import {
  FacilitySignup,
  Login,
  ProfessionalSignup,
  Application,
  Signup,
} from "./pages";
import { useThemePaletteMode } from "./context/ThemePaletteMode/ThemePaletteMode";
import Dashboard from "./pages/Dashboard/Dashboard";
import { SignupApplicationProvider } from "./context/SignupApplication/SignupApplication";

const router = createBrowserRouter(
  [
    {
      path: "/",
      children: [
        { index: true, element: <Navigate to="/login" replace /> },
        { path: "login", Component: Login },
        {
          path: "dashboard",
          Component: Layout,
          children: [
            { index: true, Component: Dashboard },
            { path: "settings", Component: () => <div>Settings page</div> },
          ],
        },
        {
          path: "signup",
          children: [
            { index: true, Component: Signup },
            {
              path: "healthcare-wellness-specialists",
              children: [
                { index: true, Component: ProfessionalSignup },
                {
                  path: "application",
                  Component() {
                    return (
                      <SignupApplicationProvider>
                        <Application />
                      </SignupApplicationProvider>
                    );
                  },
                },
              ],
            },
            { path: "medical-facility", Component: FacilitySignup },
          ],
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: false,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const App = () => {
  const { themePaletteMode } = useThemePaletteMode();
  return (
    <ThemeProvider theme={themePaletteMode}>
      <CssBaseline />
      <RouterProvider
        router={router}
        fallbackElement={<CircularProgress />}
        future={{ v7_startTransition: true }}
      />
    </ThemeProvider>
  );
};

export default App;
