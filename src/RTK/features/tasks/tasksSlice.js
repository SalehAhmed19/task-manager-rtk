import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [
    // {
    //   id: 1,
    //   status: "pending",
    //   title: "Remove Button",
    //   description:
    //     "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
    //   date: "2023-08-28",
    //   assignTo: "Mir Hussain",
    //   priority: "high",
    // },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },

    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },

    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((task) => task.id === payload.id);
      target.status = payload.status;
    },
  },
});

export const { addTask, removeTask, updateStatus } = tasksSlice.actions;

export default tasksSlice.reducer;

// TODO: 1. One click to done the process 2. Open a modal and show the details of the task 3. Show user based task
