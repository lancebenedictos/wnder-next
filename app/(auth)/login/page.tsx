"use client";

import React from "react";
import { Formik, Form, Field } from "formik";

import { Label } from "@/components/ui/label";
import Link from "next/link";
import { LoginSchema } from "@/lib/FormikValidate";
import { signInWithEmail } from "@/lib/Firebase";

function Login() {
  return (
    <div className="mt-[48px]  background-gradient min-h-screen flex justify-center items-center p-28">
      <Formik
        initialValues={{
          username: "",
          password: "",
          confirmPassword: "",
          email: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          // same shape as initial values
          const { email, password } = values;
          signInWithEmail(email, password);
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

            <Link href="/signup" className=" text-gray-700">
              Don&#39;t have an account? Sign up
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

export default Login;
