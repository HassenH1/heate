import { PositionAndSpecialtyType } from "../../pages/Signup/HealthcareWellnessSpecialists/Application/PositionAndSpecialty/components/schema";

export type SignupApplicationContextType = {
  activeStep: Readonly<number>;
  handleNext: () => void;
  handleBack: () => void;
  setUserData: React.Dispatch<React.SetStateAction<object>>;
  userData: {
    signup?: Record<string, unknown>;
    information?: InformationStepType;
    locations?: LocationType[]
    positionSpecialty?: PositionAndSpecialtyType[]
    experiences?: ExperiencesType[]
  };
};

type InformationStepType = {
  middlename?: string | undefined;
  "suite/apt"?: string | undefined;
  address: string;
  state: string;
  firstname: string;
  lastname: string;
  birthday: string;
  city: string;
  zip: string;
  phonenumber: string;
};

type LocationType = { id: number, label: string }

type ExperiencesType = {
  company: string
  endDate: string
  present?: boolean
  description: string
  startDate: string
  title: string
}