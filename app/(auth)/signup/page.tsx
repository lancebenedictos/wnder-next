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
    <div className="mt-[48px]  background-gradient min-h-screen flex justify-center items-center p-28">
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
          const { email, password } = values;
          signUpWithEmail(
            email,
            password,
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

          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="w-1/2 gap-2 bg-white py-8 px-4 rounded-md border-2 border-black flex flex-col">
            <h1 className="mb-2 font-bold text-3xl">Welcome to Wnder!</h1>
            <p className="mb-2 text-gray-300">
              Make planning with your friends easier!
            </p>

            <Label htmlFor="email">Email</Label>
            <Field
              placeholder="Email"
              type="email"
              id="email"
              className="mb-[4px] p-2 border-2 border-black rounded-sm"
              name="email"
            />
            {errors.email && touched.email ? (
              <p className=" text-rose-400">{errors.email}</p>
            ) : null}

            <Label htmlFor="username">Username</Label>
            <Field
              placeholder="Username"
              type="text"
              id="username"
              className="mb-[4px] p-2 border-2 border-black rounded-sm"
              name="username"
              autoComplete="false"
            />
            {errors.username && touched.username ? (
              <p className=" text-rose-400">{errors.username}</p>
            ) : null}

            <Label htmlFor="password">Password</Label>
            <Field
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              className="mb-[4px] p-2 border-2 border-black rounded-sm"
            />
            {errors.password && touched.password ? (
              <p className=" text-rose-400">{errors.password}</p>
            ) : null}

            <Label htmlFor="c_password">Confirm Password</Label>
            <Field
              placeholder="Confirm password"
              type="password"
              id="c_password"
              className="mb-[4px] p-2 border-2 border-black rounded-sm"
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
