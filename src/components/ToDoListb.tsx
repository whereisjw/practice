import React from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import CreateTodo from "./CreateTodo";
import { categories, categoryState, toDoSelector, toDoState } from "./atoms";
import Todo from "./Todo";

const ToDoListb = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  console.log(toDos);

  return (
    <div>
      <h1>to dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={categories.To_Do}>To Do</option>
        <option value={categories.DOING}>Doing</option>
        <option value={categories.DONE}>Done</option>
      </select>
      <CreateTodo></CreateTodo>
      {toDos?.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
      {/*      <h2>To Do</h2>
      <ul>
        {todo.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr /> */}
    </div>
  );
};

export default ToDoListb;
