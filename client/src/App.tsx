import "./index.css";

function App() {
  return (
    <>
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
          <div className="bg-y p-2.5 rounded-2xl flex justify-between items-center">
            <div className="flex items-center gap-4 ">
              <div className="p-1.5 bg-w rounded-lg max-w-[50px]">
                <img width="48" height="48" src="https://img.icons8.com/emoji/48/martial-arts-uniform-emoji.png" alt="martial-arts-uniform-emoji"/>
              </div>
              <h4 className="text-xl">Task in progress</h4>
            </div>

            <div className="p-1.5 bg-o rounded-lg">
              <img src="/assets/Time_atack_duotone.svg" alt="Time_atack_duotone" />
            </div>
          </div>

          <div className="bg-g1 p-2.5 rounded-2xl flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="p-1.5 bg-w rounded-lg max-w-[50px]">
                <img width="48" height="48" src="https://img.icons8.com/emoji/48/shamrock.png" alt="shamrock"/>
              </div>
               <h4 className="text-xl">Task Completed</h4>
            </div>

            <div className="p-1.5 bg-g2 rounded-lg">
              <img src="/assets/Done_round_duotone.svg" alt="Done_round_duotone" />
            </div>
          </div>

          <div className="bg-p2 p-2.5 rounded-2xl flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="p-1.5 bg-w rounded-lg max-w-[50px]">
                <img width="48" height="48" src="https://img.icons8.com/emoji/48/bullseye.png" alt="bullseye"/>
              </div>
              <h4 className="text-xl">Task Won't Do </h4>
            </div>

            <div className="p-1.5 bg-red rounded-lg">
              <img
                src="/assets/close_ring_duotone.svg"
                alt="close_ring_duotone"
              />
            </div>
          </div>

          <div className="bg-cian p-2.5 rounded-2xl flex justify-between items-center">
            <div className="flex items-start gap-4">
              <div className="p-1.5 bg-w max-w-[50px] rounded-lg">
                <img width="48" height="48" src="https://img.icons8.com/emoji/48/flag-in-hole-emoji.png" alt="flag-in-hole-emoji"/>
              </div>
               <div className="flex flex-col">
                <h4 className="text-xl">Task To Do </h4>

                <p>Work an a Challenge on devChallenges.io, learn Java</p>
               </div>
            </div>

          
          </div>

          <button className="bg-p text-sm flex p-2.5 rounded-2xl gap-4 items-center">
            <div className="bg-o p-2.5 rounded-lg max-w-[50px] ">
              <img  src="/assets/close_ring_duotone.svg" alt="close_ring_duotone" />
            </div>
            Add new task
          </button>
        </section>
      </section>
    </>
  );
}

export default App;
