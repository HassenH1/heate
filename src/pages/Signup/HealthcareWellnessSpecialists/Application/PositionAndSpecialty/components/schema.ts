import * as yup from "yup";
import { Position } from "./listOfPositionsAndSpecialties";

type Label = keyof typeof Position | ''

export type PositionAndSpecialtyType = {
  position: { label: Label, id: number }
  yearsOfExperience: string
  specialty: { label: string, value: string }
}

export const schema = yup.object({
  position: yup.object().shape({
    label: yup.string<Label>().required(),
    id: yup.number().required()
  }),
  yearsOfExperience: yup.string().required(),
  specialty: yup.object().shape({
    label: yup.string().required(),
    value: yup.string().required()
  })
});

export const dataSchema = yup.object({
  positionSpecialty: yup.array().min(1).of(schema)
})
