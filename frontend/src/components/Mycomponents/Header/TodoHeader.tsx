import { NotebookPen } from "lucide-react";
import { CardHeader, CardTitle } from "../../ui/card";
import { ToggleGroupSpacing } from "./ToggleGroupSpacing";
import TodoBottomHeader from "./BottomHeader";
export default function TodoHeader() {
  return (
    <>
      <CardHeader className="flex  gap-3 items-center w-full ">
        <NotebookPen size={28} color="white" className="ml-2 " />

        <CardTitle className="text-2xl uppercase w-1/2 font-bold text-white">
          Todo
        </CardTitle>
      <ToggleGroupSpacing />
      </CardHeader>
         <TodoBottomHeader />
      

     
    </>
  );
}
