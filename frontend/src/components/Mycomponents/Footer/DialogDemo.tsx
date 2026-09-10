import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TodoContext } from "@/Context/TodoContext";
import { PlusIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

export function DialogDemo() {
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    content: "",
    isCompleted: false,
  });
  const [open, setOpen] = useState(false);
  const { todos, setTodos } = useContext(TodoContext);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!todo.title.trim() || !todo.content.trim()) return;
    setTodos((prev) => [...prev, todo]);

    setTodo({
      id: "",
      title: "",
      content: "",
      isCompleted: false,
    });
    setOpen(false);
    toast.success("Todo has been created");
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form> 
        <DialogTrigger
          render={
            <Button className="font-black text-lg" variant="outline">
              <PlusIcon /> Add New
            </Button>
          }
        />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add New Todo</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="Header">Header</Label>
              <Input
                id="Header"
                name="Header"
                value={todo.title}
                onChange={(e) =>
                  setTodo((p) => ({
                    ...p,
                    title: e.target.value,
                    id: crypto.randomUUID(),
                  }))
                }
              />
            </Field>
            <Field>
              <Label htmlFor="Content">Content</Label>
              <Input
                id="Content"
                name="Content"
                value={todo.content}
                onChange={(e) =>
                  setTodo((p) => ({ ...p, content: e.target.value }))
                }
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose
              render={
                <Button
                  onClick={() =>
                    setTodo({
                      id: "",
                      title: "",
                      content: "",
                      isCompleted: false,
                    })
                  }
                  className="bg-transparent"
                  variant="destructive"
                >
                  Cancel
                </Button>
              }
            />
            <Button
              disabled={!todo.title.trim() || !todo.content.trim()}
              type="button"
              onClick={handleAdd}
            >
              Add Todo
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
