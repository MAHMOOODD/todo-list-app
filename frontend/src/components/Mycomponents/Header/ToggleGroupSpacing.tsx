import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { TodoContext, type Mode } from "@/Context/TodoContext";
import { useContext } from "react";

export function ToggleGroupSpacing() {
  const {model, setModel} = useContext(TodoContext);
  const handleValueChange = (value: string[]) => {
    if (setModel && value.length > 0) {
      setModel(value[0] as Mode);
    }
  };
  return (
    <ToggleGroup value={model ? [model] : ["all"]} onValueChange={handleValueChange} className=" ml-20 " size="sm" variant="outline" spacing={2}>
      <ToggleGroupItem className="cursor-pointer" value="all" aria-label="Toggle top">
        All
      </ToggleGroupItem>
      <ToggleGroupItem className="cursor-pointer" value="completed" aria-label="Toggle bottom">
        Done
      </ToggleGroupItem>
      <ToggleGroupItem className="cursor-pointer" value="uncompleted" aria-label="Toggle left">
        Waiting
      </ToggleGroupItem>
      
    </ToggleGroup>
  )
}
