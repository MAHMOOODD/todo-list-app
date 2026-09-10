import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { ButtonRtl } from "./ButtonRtl";

export default function TodoJop({title, content ,id ,isCompleted }: {title: string, content: string, id: string ,isCompleted: boolean}) {
  return (
    <>
      <CardContent className="w-full ">
        <Card className=" w-full p-3 py-5">
          <CardHeader>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
          </CardHeader>
          <div className="flex justify-between items-center  ">
            <CardContent className="w-1/2 text-base text-gray-500 line-clamp-3">
              {content}
            </CardContent>
          <ButtonRtl id={id} isCompleted={isCompleted} />
          </div>
        </Card>
      </CardContent>
    </>
  );
}
