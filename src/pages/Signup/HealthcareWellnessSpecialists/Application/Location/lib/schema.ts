import * as yup from "yup";

export const schema = yup.object({
  locations: yup.array().min(1).of(yup.object().shape({
    label: yup.string().required(),
    id: yup.number().required()
  }))
})