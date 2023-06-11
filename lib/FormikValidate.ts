import * as Yup from "yup";

// interface signUpFields {
//   password?: string;
//   email?: string;
//   confirmPassword?: string;
//   username?: string;
// }

// const validate = (values: signUpFields) => {
//   const errors: signUpFields = {};

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   return errors;
// };

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .required("Required")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const PlanSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
});

export { SignupSchema, LoginSchema, PlanSchema };
