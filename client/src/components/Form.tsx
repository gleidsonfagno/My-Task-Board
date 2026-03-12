import React, { useState } from "react";
import { useAppContext } from "../context/useAppContext";
import type { Task } from "../types/data";

type ModalProps = {
  selectedTask: Task | null;
  onClose: () => void;
};

const Form: React.FC<ModalProps> = ({ selectedTask, onClose }) => {
  const { addTask, deleteTask } = useAppContext();

  const [title, setTitle] = useState(selectedTask?.title ?? "");
  const [description, setDescription] = useState(
    selectedTask?.description ?? "",
  );
  const [status, setStatus] = useState(selectedTask?.status ?? "");
  const [icon, setIcon] = useState(selectedTask?.icon ?? "");

  const icons = [
    "https://img.icons8.com/color/48/idea.png",
    "https://img.icons8.com/color/48/home.png",
    "https://img.icons8.com/color/48/dumbbell.png",
    "https://img.icons8.com/color/48/books.png",
    "https://img.icons8.com/color/48/chat.png",
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    addTask({
      title,
      description,
      status,
      icon,
    });

    onClose();
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-30 flex  justify-end text-gray-600 bg-black/50">
      <section
        className="sm:w-[50%] flex flex-col m-4  gap-8 w-full  border border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        <div className="flex flex-row justify-between py-3">
          <h2 className="text-xl">Task details</h2>
          <button onClick={onClose}>
            <div className="bg-cian2 p-2.5 border  border-gray-300 rounded-lg max-w-[50px] ">
              <img
                src="/assets/close_ring_duotone.svg"
                alt="close_ring_duotone"
              />
            </div>
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between gap-8"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm">
              Task name
            </label>
            <input
              type="text"
              placeholder="Task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-md p-3 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="text-sm">
              Description
            </label>
            <textarea
              id="desc"
              name="description"
              placeholder="Enter a short description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded-md p-3 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm pb-2">icons</p>

            <div className="flex gap-3">
              {icons.map((iconUrl) => (
                <button
                  key={iconUrl}
                  type="button"
                  onClick={() => setIcon(iconUrl)}
                  className={`p-2 border rounded-lg ${
                    icon === iconUrl
                      ? "border-blue-500 bg-cyan-100"
                      : "border-gray-200"
                  }`}
                >
                  <img src={iconUrl} width={32} />
                </button>
              ))}
            </div>
          </div>

          <div className="">
            <p className="text-sm">Status</p>
            <div className="flex items-center gap-2 flex-wrap">
              <label
                className={`flex items-center gap-2 p-1.5 max-w-[260px] w-full rounded-2xl cursor-pointer border
        ${status === "In Progress" ? "border-green-500" : "border-cian2"}`}
              >
                <div className="p-1.5 bg-o rounded-lg   ">
                  <img
                    src="/assets/Time_atack_duotone.svg"
                    alt="Time_atack_duotone"
                  />
                </div>

                <p> In Progress </p>

                <input
                  type="radio"
                  name="taskStatus"
                  value="In Progress"
                  checked={status === "In Progress"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="ml-auto accent-green-500"
                />
              </label>

              <label
                className={`flex items-center gap-2 p-1.5 max-w-[260px] w-full rounded-2xl cursor-pointer border
        ${status === "Completed" ? "border-green-500" : "border-cian2"}`}
              >
                <div className="p-1.5 bg-g2 rounded-lg">
                  <img
                    src="/assets/Done_round_duotone.svg"
                    alt="Done_round_duotone"
                  />
                </div>
                <p> Completed </p>
                <input
                  type="radio"
                  name="taskStatus"
                  value="Completed"
                  checked={status === "Completed"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="ml-auto accent-green-500"
                />
              </label>

              <label
                className={`flex items-center gap-2 p-1.5 max-w-[260px] w-full rounded-2xl cursor-pointer border
        ${status === "Won't do" ? "border-green-500" : "border-cian2"}`}
              >
                <div className="p-1.5 bg-red rounded-lg">
                  <img
                    src="/assets/close_ring_duotone.svg"
                    alt="close_ring_duotone"
                  />
                </div>
                <p> Won't Do </p>
                <input
                  type="radio"
                  name="taskStatus"
                  value=" Won't Do"
                  checked={status === " Won't Do"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="ml-auto accent-green-500"
                />
              </label>
            </div>
          </div>

          <div className="mt-36 flex gap-2 justify-end">
            <button onClick={() => {
              if(selectedTask){
                deleteTask(selectedTask.id);
                onClose();
              }
            }
            } className="px-3 py-1 bg-red-500 text-white rounded">
              Delete
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;
