import { CircularProgress, CssBaseline, ThemeProvider } from "@mui/material";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import {
  FacilitySignup,
  ProfessionalSignup,
  Application,
  Signup,
  Dashboard,
  FindJobs,
  MyShifts,
  Login,
} from "./pages";
import { useThemePaletteMode } from "./context/ThemePaletteMode/ThemePaletteMode";
import { SignupApplicationProvider } from "./context/SignupApplication/SignupApplication";

const router = createBrowserRouter(
  [
    {
      path: "/",
      children: [
        { index: true, element: <Navigate to="/login" replace /> }, // original
        {
          path: "login",
          element: <Login />,
        },
        {
          element: (
            <>
              {/* Put Auth state management here */}
              <Outlet />
            </>
          ),
          children: [
            {
              element: <Layout />,
              children: [
                { path: "/dashboard", element: <Dashboard /> },
                { path: "/findjobs", element: <FindJobs /> },
                { path: "/myshifts", element: <MyShifts /> },
                { path: "/myassignments", element: <div>My assignments</div> },
                { path: "/timesheet", element: <div>Timesheet</div> },
                { path: "/earnings", element: <div>Earnings</div> },
                { path: "/account", element: <div>Account</div> },
                { path: "/settings", element: <div>Settings</div> },
              ],
            },
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
    {
      path: "*",
      element: <div>Not found!</div>,
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
