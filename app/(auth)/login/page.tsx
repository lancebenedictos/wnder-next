"use client";

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

import { Label } from "@/components/ui/label";
import Link from "next/link";
import { LoginSchema } from "@/lib/FormikValidate";
import { signInWithEmail } from "@/lib/Firebase";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  return (
    <div className="background-gradient min-h-screen flex justify-center items-center p-28">
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
          signInWithEmail(email, password, (success) => {
            if (success) {
              router.replace("/");
            } else {
              setError("Email or password is incorrect.");
            }
          });
        }}
      >
        {({ errors, touched }) => (
          <Form className="w-1/2 gap-2 bg-white py-8 px-4 rounded-md border-2 border-black flex flex-col box_shadow">
            <h1 className="mb-2 font-bold text-3xl title">Welcome to Wnder!</h1>
            <p className="mb-2 text-gray-300 sub_title">
              Make planning with your friends easier!
            </p>

            <Label htmlFor="email" className="sub_title self-start">
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

            <Label htmlFor="password" className="sub_title self-start">
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

            {error ? <p>{error}</p> : null}
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
