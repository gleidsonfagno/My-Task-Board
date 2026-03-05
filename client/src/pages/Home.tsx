
import { useEffect } from "react";
import Task from "../components/TaskComponent";
import { useAppContext } from "../context/useAppContext";


const Home = () => {
  const { board, createBoardIfNotExists } = useAppContext();

  useEffect(() => {
    createBoardIfNotExists();
  },[createBoardIfNotExists])

  console.log(board)
  if(!board) return <p>Carregando...</p>;

  return (
    <>

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
            <Task 
              key={task.id}
              task={task}
            />
          ))}

          <button
          
           className="bg-p text-sm flex p-2.5 rounded-2xl gap-4 items-center cursor-pointer">
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
