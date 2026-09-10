import { CardTitle } from "@/components/ui/card";
import { TodoContext } from "@/Context/TodoContext";
import { useContext } from "react";

export default function TodoBottomHeader() {
  const { todos,model } = useContext(TodoContext);
  const myTodos ={
      all : todos ? todos.length : 0,
      completed : todos ? todos.filter((t) => t.isCompleted).length : 0,
      uncompleted : todos ? todos.filter((t) => !t.isCompleted).length : 0,
  }

  return (
      <div className="flex font-sans gap-35 items-center w-full ">
            <button  className=" text-lg font-bold  border-2 border-white bg-white px-3 py-1 rounded-2xl text-pink-500 transition-all duration-500">
                 {model === "all" ? `COUNT: ${myTodos.all}` : model === "completed" ? `COUNT: ${myTodos.completed}` : `COUNT: ${myTodos.uncompleted}`}
            </button>
      
    <CardTitle className="font-bold text-2xl   text-white">
      MY TODOS
    </CardTitle>
  </div>
  );
}
