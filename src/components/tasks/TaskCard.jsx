import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { removeTask, updateStatus } from "../../RTK/features/tasks/tasksSlice";

const TaskCard = ({ task }) => {
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
  const dispatch = useDispatch();

  let updatedStatus;

  if (task.status === "pending") {
    updatedStatus = "progress";
  } else if (task.status === "progress") {
    updatedStatus = "done";
  } else {
    updatedStatus = "archived";
  }

  return (
    <div className="p-5 rounded-md bg-secondary/10">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task.priority === "high" ? "text-red-500" : ""
        } ${task.priority === "medium" ? "text-yellow-500" : ""} ${
          task.priority === "low" ? "text-green-500" : ""
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button onClick={() => dispatch(removeTask(task.id))} title="Delete">
            <TrashIcon className="w-5 h-5 text-red-500" />
          </button>
          <button
            onClick={() =>
              dispatch(updateStatus({ id: task.id, status: updatedStatus }))
            }
            title="In progress"
          >
            <ArrowRightIcon className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
