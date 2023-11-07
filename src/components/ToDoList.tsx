import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  FirstName: string;
  LastName: string;
  Username: string;
  Password: string;
  Password1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IForm>({ defaultValues: { email: "@naver.com" } });
  const onValid = (data: IForm) => {
    if (data.Password !== data.Password1) {
      setError(
        "Password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server offline." });
  };
  console.log(errors);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column" }}>
        <input
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver.com emails allowed",
            },
          })}
          type="text"
          placeholder="email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("FirstName", {
            required: "write here",
            validate: (value) =>
              value.includes("park") ? "박씨는 가입 불가입니다" : true,
          })}
          type="text"
          placeholder="First Name"
        />
        <span>{errors?.FirstName?.message}</span>
        <input
          {...register("LastName", { required: "write here" })}
          type="text"
          placeholder="Last Name"
        />
        <span>{errors?.LastName?.message}</span>
        <input
          {...register("Username", { required: "write here", minLength: 10 })}
          type="text"
          placeholder="Username"
        />
        <span>{errors?.Username?.message}</span>
        <input
          {...register("Password", { required: "write here", minLength: 5 })}
          type="text"
          placeholder="Password"
        />
        <span>{errors?.Password?.message}</span>
        <input
          {...register("Password1", {
            required: "password is required",
            minLength: { value: 5, message: "비밀번호가 너무 짧습니다" },
          })}
          type="text"
          placeholder="Password1"
        />
        <span>{errors?.Password1?.message}</span>
        <button>Add</button>
        {errors?.extraError?.message}
      </form>
    </div>
  );
}

export default ToDoList;
