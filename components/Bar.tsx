import { FunctionComponent } from "react";
import { ISkill } from "../type";

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, level, name },
}) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r to-blue-600 from-green "
        style={{ width: level }}
      >
        <Icon className="w-6 h-6 ml-1 mr-2 font-bold text-purple-700" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
