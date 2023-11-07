import { atom, selector } from "recoil";

export enum categories {
  "To_Do" = "To_Do",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: categories;
}

export const categoryState = atom<categories>({
  key: "category",
  default: categories.To_Do,
});

export const toDoState = atom<IToDo[]>({
  key: "todo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((todo) => todo.category == category);
  },
});
