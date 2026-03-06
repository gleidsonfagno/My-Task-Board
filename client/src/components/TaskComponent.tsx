import type { Task } from "../types/data";

type TaskProps = {
  task: Task;
  onEdit: () => void;
};

type Status = {
  status: string;
}

const statusStyles: Record<Status["status"], string> = {
  "Completed": "bg-g1",
  "In Progress": "bg-y",
  "Won't do": "bg-p2",
};

const TaskComponent: React.FC<TaskProps> = ({ task, onEdit }) => {
  return (
    <button
    onClick={onEdit}
      className={`${statusStyles[task.status]} p-2.5 rounded-2xl flex justify-between items-center cursor-pointer`}
    >
      <div className="flex items-center gap-4 ">
        <div className="p-1.5 bg-w rounded-lg max-w-[50px]">
          <img
            width="48"
            height="48"
            src={task.icon}
            alt="martial-arts-uniform-emoji"
          />
        </div>
        <h4 className="text-xl">{task.title}</h4>
      </div>

      {task.status === "Completed" ? (
        <div className="p-1.5 bg-g2 rounded-lg">
          <img src="../../assets/Done_round.svg" alt="Time_atack_duotone" />
        </div>
      ) : task.status === "In Progress" ? (
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

export default TaskComponent;
