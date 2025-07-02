import { useForm } from "react-hook-form";

export default function AddTaskModal({ setIsOpen }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="my-3">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <label>Title</label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            {...register("title")}
            className="w-full border-0 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label>Description</label>
          <textarea
            type="text"
            id="description"
            placeholder="Description"
            {...register("description")}
            className="w-full border-0 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label>Date</label>
          <input
            type="date"
            id="date"
            {...register("date")}
            className="w-full border-0 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label>Assign to</label>
          <select
            id="assignTp"
            {...register("assignTo")}
            defaultValue={"assigned-to"}
            className="w-full border-0 rounded-lg"
          >
            <option value="assigned-to" disabled>
              Assigned to
            </option>
            <option value="saleh-ahmed-mahin">Saleh Ahmed Mahin</option>
            <option value="sakib-al-hasan">Sakib Al Hasan</option>
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <label>Priority</label>
          <select
            id="assignTp"
            {...register("priority")}
            className="w-full border-0 rounded-lg"
            defaultValue={"priority"}
          >
            <option value="priority" disabled>
              Priority
            </option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex gap-5">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full text-white bg-red-500 btn"
          >
            Cancel
          </button>
          <button type={"submit"} className="w-full btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
