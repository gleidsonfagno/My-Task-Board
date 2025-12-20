import { useState } from "react";

const Modal = () => {
  const [selectedIcon, setSelectedIcon] = useState("");
  const icons = [
    { value: "⏰", label: "Relógio vermelho",},
    { value: "💪", label: "Musculação" },
    { value: "🏠", label: "Casa" },
    { value: "📚", label: "Livros" },
    { value: "💬", label: "Chat" },
  ];

  const [status, setStatus] = useState("");
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-30 flex  justify-end text-gray-600 bg-black/50">
      <section className="sm:w-[50%] flex flex-col m-4  gap-8 w-full  border border-gray-300/60 rounded-2xl px-8 bg-white">
        <div className="flex flex-row justify-between py-3">
          <h2 className="text-xl">Task details</h2>
          <button>
            <div className="bg-cian2 p-2.5 border  border-gray-300 rounded-lg max-w-[50px] ">
              <img
                src="/assets/close_ring_duotone.svg"
                alt="close_ring_duotone"
              />
            </div>
          </button>
        </div>

        <form action="" className="flex flex-col justify-between gap-8">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm">
              Task name
            </label>
            <input
              type="text"
              placeholder="Task"
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
              className="border border-gray-300 rounded-md p-3 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm pb-2">icons</p>
            <div className="flex gap-3">
              {icons.map((icon) => (
                <label key={icon.value} style={{ cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="taskIcon"
                    value={icon.value}
                    checked={selectedIcon === icon.value}
                    onChange={(e) => setSelectedIcon(e.target.value)}
                    style={{ display: "none" }}
                  />
                  <span
                    style={{
                      fontSize: "30px",
                      padding: "10px",
                      borderRadius: "8px",
                      border:
                        selectedIcon === icon.value
                          ? "2px solid #007bff"
                          : "2px solid transparent",
                      backgroundColor:
                        selectedIcon === icon.value
                          ? "var(--color-cian)"
                          : "var(--color-cian)",
                      ...icon,
                    }}
                  >
                    {icon.value}
                  </span>
                </label>
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
        ${status === "Won't Do" ? "border-green-500" : "border-cian2"}`}
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
            <button className="px-3 py-1 bg-red-500 text-white rounded">
              Delete
            </button>
            <button className="px-3 py-1 bg-blue-500 text-white rounded">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Modal;
