import { TodoContext, type Mode, type Todo } from "@/Context/TodoContext";
import { Card } from "../ui/card";
import TodoBody from "./Body/TodoBody";
import TodoFooter from "./Footer/TodoFooter";
import TodoHeader from "./Header/TodoHeader";
import { useState } from "react";
import { Toaster } from "../ui/sonner";

export default function Todo() {
  const t = localStorage.getItem("todos");
  const todosFromStorage = t ? JSON.parse(t) : [];
  const[todos,setTodos] = useState<Todo[]>(todosFromStorage);
  const [model, setModel] = useState<Mode>("all");

  return (
    <TodoContext.Provider value={{todos,setTodos,model, setModel}}>
    <div className="flex font-serif  items-center justify-center h-screen">
      <Card
        className="
    w-full
    sm:w-11/12
    md:w-3/4
    lg:w-2/3
    xl:w-1/2
    max-w-2xl
    p-5
    rounded-2xl
    bg-linear-120
    from-red-200
    to-pink-500
    flex
    flex-col
    gap-4
  "
      >
        {" "}
         <Toaster  />
        <TodoHeader />
        <TodoBody  />
        <TodoFooter  />
      </Card>
    </div>
    </TodoContext.Provider>
  );
}
