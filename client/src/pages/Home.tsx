import { useEffect, useState } from "react";
import TaskComponent from "../components/TaskComponent";
import { useAppContext } from "../context/useAppContext";
import Form from "../components/Form";
import type { Task } from "../types/data";

const Home = () => {
  const { board, createBoardIfNotExists } = useAppContext();
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelected] = useState<Task | null>(null);

  function handleEdit(task: Task) {
    setSelected(task);
    setShowModal(true);
  }

  function hadleCreate() {
    setSelected(null);
    setShowModal(true);
  }

  useEffect(() => {
    createBoardIfNotExists();
  }, [createBoardIfNotExists]);

  console.log(board);
  if (!board) return <p>Carregando...</p>;

  return (
    <>
      {showModal && (
        <Form selectedTask={selectedTask} onClose={() => setShowModal(false)} />
      )}
      <section className="max-w-xl m-auto flex flex-col gap-12 py-12 px-4">
        <div className="flex items-start gap-4">
          <img src="/Logo.svg" alt="logo" />

          <div className="flex flex-col gap-5">
            <h1 className="flex  items-center gap-4 text-[40px] ">
              {board.title}
              <i>
                <img src="./assets/Edit_duotone.svg" alt="Edit_duotone" />
              </i>
            </h1>
            <p className="text-base"> {board.description} </p>
          </div>
        </div>

        <section className="flex flex-col gap-4">
          {board.tasks.map((task) => (
            <TaskComponent
              key={task.id}
              task={task}
              onEdit={() => handleEdit(task)}
            />
          ))}

          <button
            onClick={hadleCreate}
            className="bg-p text-sm flex p-2.5 rounded-2xl gap-4 items-center cursor-pointer"
          >
            <div className="bg-o p-2.5 rounded-lg max-w-[50px] ">
              <img
                src="/assets/close_ring_duotone.svg"
                alt="close_ring_duotone"
              />
            </div>
            Add new task
          </button>
        </section>
      </section>
    </>
  );
};

export default Home;
