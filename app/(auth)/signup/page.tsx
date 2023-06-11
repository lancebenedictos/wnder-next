"use client";

import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Formik, Form, Field } from "formik";

import React from "react";
import { SignupSchema } from "@/lib/FormikValidate";
import { signUpWithEmail } from "@/lib/Firebase";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";

function Signup() {
  const router = useRouter();
  return (
    <div className="  background-gradient min-h-screen flex justify-center items-center p-28">
      <Formik
        initialValues={{
          username: "",
          password: "",
          confirmPassword: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          const { email, password, username } = values;
          signUpWithEmail(
            email,
            password,
            username,
            (user: User | null, error: Error | null) => {
              if (error) {
                // Show alert
                console.log(error);
              } else if (user) {
                // navigate to home
                router.replace("/");
              }
            }
          );
        }}
      >
        {({ errors, touched }) => (
          <Form className="w-1/2 gap-2 bg-white py-8 px-4 rounded-md border-2 border-black flex flex-col box_shadow">
            <h1 className="mb-2 font-bold text-3xl title">Welcome to Wnder!</h1>
            <p className="mb-2 text-gray-300 sub_title self-start">
              Make planning with your friends easier!
            </p>

            <Label htmlFor="email" className="self-start">
              Email
            </Label>
            <Field
              placeholder="Email"
              type="email"
              id="email"
              className="mb-[4px] form_style"
              name="email"
            />
            {errors.email && touched.email ? (
              <p className=" text-rose-400">{errors.email}</p>
            ) : null}

            <Label htmlFor="username " className="self-start">
              Username
            </Label>
            <Field
              placeholder="Username"
              type="text"
              id="username"
              className="mb-[4px] form_style"
              name="username"
              autoComplete="false"
            />
            {errors.username && touched.username ? (
              <p className=" text-rose-400">{errors.username}</p>
            ) : null}

            <Label htmlFor="password" className="self-start">
              Password
            </Label>
            <Field
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              className="mb-[4px] form_style"
            />
            {errors.password && touched.password ? (
              <p className=" text-rose-400">{errors.password}</p>
            ) : null}

            <Label htmlFor="c_password" className="self-start">
              Confirm Password
            </Label>
            <Field
              placeholder="Confirm password"
              type="password"
              id="c_password"
              className="mb-[4px] form_style"
              name="confirmPassword"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className=" text-rose-400">{errors.confirmPassword}</p>
            ) : null}

            <Link href="/login" className=" text-gray-700">
              Already have an account? Login.
            </Link>
            <button
              className=" bg-yellow-300 w-fit self-center px-4 py-2 border-2 border-b-4 border-r-4 border-black rounded-sm"
              type="submit"
            >
              Sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
