import type React from "react";

type TaskProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  title: string;
  icon: string;
  status: string;
};

const statusStyles: Record<TaskProps["status"], string> = {
  Completed: "bg-g1",
  "In Progress": "bg-y",
  "Won't do": "bg-p2",
};

const Task: React.FC<TaskProps> = ({
  showModal,
  setShowModal,
  title,
  // icon,
  status,
}) => {
  return (
    <button
      onClick={() => setShowModal(!showModal)}
      className={`${statusStyles[status]} p-2.5 rounded-2xl flex justify-between items-center cursor-pointer`}
    >
      <div className="flex items-center gap-4 ">
        <div className="p-1.5 bg-w rounded-lg max-w-[50px]">
          <img
            width="48"
            height="48"
            // src={icon}
            src="https://img.icons8.com/emoji/48/bullseye.png"
            alt="martial-arts-uniform-emoji"
          />
        </div>
        <h4 className="text-xl">{title}</h4>
      </div>

      {status === "Completed" ? (
        <div className="p-1.5 bg-g2 rounded-lg">
          <img src="../../assets/Done_round.svg" alt="Time_atack_duotone" />
        </div>
      ) : status === "In Progress" ? (
        <div className="p-1.5 bg-o rounded-lg">
          <img src="../../assets/Done_round.svg" alt="Done_round" />
        </div>
      ) : (
        <div className="p-1.5 bg-red rounded-lg">
          <img
            src="../../assets/close_ring_duotone.svg"
            alt="close_ring_duotone"
          />
        </div>
      )}
    </button>
  );
};

export default Task;
