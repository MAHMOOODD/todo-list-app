"use client";

import { Button } from "@/components/ui/button";
import { TodoContext } from "@/Context/TodoContext";
import { CheckIcon } from "lucide-react";
import { useContext, useEffect } from "react";
import { AlertForDelete } from "./AlertForDelete";
import { EditDialog } from "./EditDialog";

export function ButtonRtl({
  id,
  isCompleted,
}: {
  id: string;
  isCompleted: boolean;
}) {
  const { todos, setTodos } = useContext(TodoContext);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify([...todos]));
  }, [todos]);
  const handleCheck = () => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t,
      ),
    );
  };

  return (
    <div className="flex flex-wrap items-center  gap-2 md:flex-row">
      <Button
        onClick={handleCheck}
        variant="outline"
        className={` text-green-700  transition-all duration-500 ${isCompleted ? `bg-green-600 text-white` : `hover:bg-green-900`}  cursor-pointer `}
      >
        <CheckIcon stroke-width="3" />
      </Button>
      <EditDialog id={id} />
      <AlertForDelete id={id} />
    </div>
  );
}
