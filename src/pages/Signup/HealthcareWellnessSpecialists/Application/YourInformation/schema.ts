import * as yup from "yup";

const phoneNumberRegex = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);

export const schema = yup
  .object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    middlename: yup.string(),
    birthday: yup.string().required("birthday is a required field").matches(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/, "Must be only digits"),
    // birthday: yup.string().required("birthday is a required field").matches(/^[0-9]+$/, "Must be only digits"),
    // .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
    address: yup.string().required(),
    "suite/apt": yup.string(),
    zip: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    phonenumber: yup
      .string()
      .matches(phoneNumberRegex, "Invalid phone number")
      .required(), // @todo might not need regex
  })
  .required();