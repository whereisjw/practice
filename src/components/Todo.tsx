import React from "react";
import { IToDo, categories, toDoState } from "./atoms";
import { useSetRecoilState } from "recoil";

const Todo = ({ text, category, id }: IToDo) => {
  const setTodo = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodo((oldTodos) => {
      const targetIndex = oldTodos.findIndex((v) => v.id == id);

      const newTodo = { text, id, category: name as any };

      return [
        ...oldTodos.slice(0, targetIndex),
        newTodo,
        ...oldTodos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>

      {category !== categories.DOING && (
        <button name={categories.DOING + ""} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== categories.To_Do && (
        <button name={categories.To_Do + ""} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== categories.DONE && (
        <button name={categories.DONE + ""} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default Todo;
