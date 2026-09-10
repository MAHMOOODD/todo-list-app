import { createContext } from "react";

export interface Todo {
  id: string;
  title: string;
  content: string;
  isCompleted: boolean;
}
export type Mode = "all" | "completed" | "uncompleted";

export interface TodoContextType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  model: Mode;
  setModel?: React.Dispatch<React.SetStateAction<Mode>>;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => {},
  model: "all",
  setModel: () => {},

});