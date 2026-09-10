import { TodoContext } from "@/Context/TodoContext";
import TodoJop from "./TodoJop";
import { useContext, useEffect, useMemo } from "react";

export default function TodoBody() {
  const { todos,setTodos, model } = useContext(TodoContext);
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      setTodos([...parsedTodos]);

    }
  }, [setTodos]);


    const filter = useMemo(() =>{
      console.log("todos");
      if(!todos){
        return [];
      }
      if(model === "all"){
        return todos;
      }
      else if(model === "completed"){
        return todos.filter((t) => t.isCompleted);
      }
      else if(model === "uncompleted"){
        return todos.filter((t) => !t.isCompleted);
      }
      return [];
    }, [todos, model]);

  
  
  const todostorender = filter.map((t) => (
    <TodoJop
      id={t.id}
      title={t.title}
      content={t.content}
      isCompleted={t.isCompleted}
    />
  ));
  return (
    <div className="m-h-3/4 flex flex-col gap-3  overflow-y-auto scrollbar-thin scrollbar-thumb-pink-400 scrollbar-track-pink-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      {todostorender}
    </div>
  );
}
