import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-2 rounded shadow-slate-300 border-2 bg-slate-300">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row justify-between items-center ">
          {header}
        </div>
        <div
          onClick={() => setExpanded(!expanded)}
          className="cursor-pointer text-indigo-300"
        >
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
};
export default ExpandablePanel;
