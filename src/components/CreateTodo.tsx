import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./atoms";

interface IForm {
  todo: string;
}

const CreateTodo = () => {
  const setTodos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { handleSubmit, register, setValue } = useForm<IForm>();

  const onValid = ({ todo }: any) => {
    setTodos((prev) => [{ text: todo, id: Date.now(), category }, ...prev]);
    setValue("todo", "");
  };
  return (
    <form action="" onSubmit={handleSubmit(onValid)}>
      <input
        {...register("todo", { required: "write to do" })}
        type="text"
        placeholder="write to do"
      />
      <button>add</button>
    </form>
  );
};

export default CreateTodo;
