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
  Dashboard,
} from "./pages";
import { useThemePaletteMode } from "./context/ThemePaletteMode/ThemePaletteMode";
import { SignupApplicationProvider } from "./context/SignupApplication/SignupApplication";

const router = createBrowserRouter(
  [
    {
      path: "/",
      children: [
        { index: true, element: <Navigate to="/login" replace /> },
        { path: "login", element: <Login /> },
        {
          path: "dashboard",
          Component: Layout,
          children: [
            { index: true, element: <Dashboard /> },
            { path: "settings", element: <div>Settings page</div> },
          ],
        },
        {
          path: "signup",
          children: [
            {
              index: true,
              element: <Signup />,
            },
            {
              path: "healthcare-wellness-specialists",
              element: <SignupApplicationProvider />,
              children: [
                { index: true, element: <ProfessionalSignup /> },
                { path: "application", element: <Application /> },
              ],
            },
            {
              path: "medical-facility",
              element: <SignupApplicationProvider />,
              children: [{ index: true, element: <FacilitySignup /> }],
            },
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
