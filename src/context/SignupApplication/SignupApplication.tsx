import { createContext, useState, useContext } from "react";
import { Outlet } from "react-router";
import { SignupApplicationContextType } from "./SignupApplication.types";

const SignupApplicationContext =
  createContext<null | SignupApplicationContextType>(null);

function SignupApplicationProvider() {
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState({});

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <SignupApplicationContext.Provider
      value={{ handleNext, handleBack, activeStep, setUserData, userData }}
    >
      <Outlet />
    </SignupApplicationContext.Provider>
  );
}

function useApplication() {
  const context = useContext(SignupApplicationContext);

  if (!context) {
    throw new Error(
      "useApplication must be within SignupApplicationProvider provider"
    );
  }
  return context;
}

export { SignupApplicationProvider, useApplication };
