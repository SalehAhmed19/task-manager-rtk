import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

const MyTasks = () => {
  const { tasks } = useSelector((state) => state.tasksSlice);
  // const mytask = tasks.filter((task) => task.assignTo === "");
  // const task = {
  //   id: 1,
  //   status: "pending",
  //   title: "Remove Button",
  //   description:
  //     "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
  //   date: "2023-08-28",
  //   assignedTo: "Mir Hussain",
  //   priority: "high",
  // };

  return (
    <div>
      <h1 className="my-3 text-xl">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {tasks?.map((task) => (
          <div
            key={task.id}
            className="flex justify-between p-3 rounded-md bg-secondary/10"
          >
            <h1>{task.title}</h1>
            <div className="flex gap-3">
              <button className="grid place-content-center" title="Details">
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button className="grid place-content-center" title="Done">
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
