import { useContext } from "react";
import Modal from "../components/Modal";
import { AppContext } from "../context/AppContext";
import Task from "../components/Task";

const Home = () => {
  const { showModal, setShowModal, tasks, loading } = useContext(AppContext);
  
  if(loading) return <p>Carregando..</p>

  return (
    <>
      {showModal ? <Modal /> : false}

      <section className="max-w-xl m-auto flex flex-col gap-12 py-12 px-4">
        <div className="flex items-start gap-4">
          <img src="/Logo.svg" alt="logo" />

          <div className="flex flex-col gap-5">
            <h1 className="flex  items-center gap-4 text-[40px] ">
              My Task Board{" "}
              <i>
                <img src="./assets/Edit_duotone.svg" alt="Edit_duotone" />
              </i>
            </h1>
            <p className="text-base">Tasks to keep organized </p>
          </div>
        </div>

        <section className="flex flex-col gap-4">
          {tasks.map((tasks) => (
            <Task
              key={tasks.id}
              showModal={showModal}
              setShowModal={setShowModal}
              title={tasks.title}
              icon={tasks.icon}
              status={tasks.status}
            />
          ))}

          <button
          onClick={() => setShowModal(!showModal)}
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
