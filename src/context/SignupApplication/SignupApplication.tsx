import { createContext, useState, ReactNode, useContext } from "react";

type SignupApplicationContextType = {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
};

const SignupApplicationContext =
  createContext<null | SignupApplicationContextType>(null);

function SignupApplicationProvider({ children }: { children: ReactNode }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <SignupApplicationContext.Provider
      value={{ handleNext, handleBack, activeStep }}
    >
      {children}
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
