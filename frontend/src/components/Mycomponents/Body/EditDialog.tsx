import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TodoContext } from "@/Context/TodoContext";
import { Edit2Icon } from "lucide-react";
import { useContext, useState } from "react";
import { toast } from "sonner";

export function EditDialog({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  const { todos, setTodos } = useContext(TodoContext);
  const myTodo = todos.find((t) => t.id === id);
  const [todo, setTodo] = useState(myTodo);

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todo) return;

    // التحقق من أن الحقول ليست فارغة
    if (!todo.title || !todo.content) {
      alert("Please fill all fields");
      return; // نوقف الكود هنا وم نعملش تحديث لو الحقول فاضية
    }

    setTodos(todos.map((t) => (t.id === id ? todo : t)));
    setOpen(false); // Close the dialog after saving
    toast.info("Todo has been updated");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* 1. الـ Trigger خارج الـ form تماماً عشان ما يعملش Submit تلقائي لما تفتحه */}
      <DialogTrigger
        render={
          <Button
            className="text-blue-400 hover:bg-blue-500 transition-all duration-500 hover:text-white"
            variant="outline"
          >
            <Edit2Icon />
          </Button>
        }
      />

      <DialogContent className="sm:max-w-sm">
        {/* 2. الـ form يبدأ هنا داخل الـ Content ويحتوي على كل المدخلات وأزرار الحفظ */}
        <form onSubmit={HandleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Todo</DialogTitle>
            <DialogDescription>
              Make changes to your todo here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="py-4">
            <Field>
              <Label htmlFor="Header">Header</Label>
              <Input
                id="Header"
                onChange={(e) => {
                  if (!todo) return;
                  setTodo({ ...todo, title: e.target.value });
                }}
                name="Header"
                defaultValue={todo?.title ?? ""}
              />
            </Field>
            <Field>
              <Label htmlFor="content">Content</Label>
              <Input
                id="content"
                placeholder="Content..."
                onChange={(e) => {
                  if (!todo) return;
                  setTodo({ ...todo, content: e.target.value });
                }}
                name="content"
                defaultValue={todo?.content ?? ""}
              />
            </Field>
          </FieldGroup>

          <DialogFooter className="gap-2">
            {/* تأكد أن زر الإلغاء يمتلك type="button" عشان ما يشغلش الـ submit بالخطأ */}
            <DialogClose
              render={
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              }
            />
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
