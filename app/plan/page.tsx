"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Label } from "@/components/ui/label";
import { PlanSchema } from "@/lib/FormikValidate";
import { useAuthContext } from "@/context/AuthContext";
import { createDocument, getUserRef } from "@/lib/Firebase";
import { useRouter } from "next/navigation";

function Create() {
  const { user } = useAuthContext();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  return (
    <div className=" background-gradient min-h-screen flex justify-center items-center p-28">
      <Formik
        initialValues={{
          name: "",
          description: "",
          date: "",
        }}
        validationSchema={PlanSchema}
        onSubmit={async (values) => {
          setLoading(true);
          const author = user?.uid;
          if (!author) return;
          const plan = {
            author: getUserRef(author),
            ...values,
          };
          createDocument(plan, "/plans").then((res) => {
            router.push(`/plan/${res}`);
            setLoading(false);
          });
        }}
      >
        {({ errors, touched }) => (
          <Form className="w-1/2 gap-2 bg-white py-8 px-4 rounded-md border-2 border-black flex flex-col box_shadow">
            <h1 className="mb-2 font-bold text-3xl title">
              Plan your new adventure!
            </h1>

            {loading && <h1>loading</h1>}
            <Label htmlFor="name" className="self-start">
              Plan name
            </Label>
            <Field
              placeholder="Give your adventure a name"
              type="text"
              id="name"
              className="mb-[4px] form_style"
              name="name"
            />
            {errors.name && touched.name ? (
              <p className=" text-rose-400">{errors.name}</p>
            ) : null}

            <Label htmlFor="description" className="self-start">
              Describe your adventure
            </Label>
            <Field
              placeholder="Use words like, camping, fishing trip!"
              type="text"
              id="description"
              className="mb-[4px] form_style"
              name="description"
            />

            <Label htmlFor="date " className="self-start">
              Date
            </Label>
            <Field
              placeholder="date"
              type="date"
              id="date"
              className="mb-[4px] form_style"
              name="date"
              autoComplete="false"
            />

            <button
              className=" bg-yellow-300 w-fit self-center px-4 py-2 border-2 border-b-4 border-r-4 border-black rounded-sm"
              type="submit"
              disabled={loading}
            >
              Sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Create;
