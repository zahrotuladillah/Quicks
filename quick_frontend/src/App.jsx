import { useEffect, useState } from "react";
import quickLogo from "./assets/quick.png";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { PiBookOpenText } from "react-icons/pi";
import { RiQuestionAnswerLine } from "react-icons/ri";
import clsx from "clsx";
import Messaging from "./layout/messaging";
import Todo from "./layout/todo";
import Roomchat from "./layout/roomchat";
import axios from "axios";
import useSWR from "swr";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [fitur, setFitur] = useState("");
  const [idGroup, setIdGroup] = useState(0);
  const [dataRoomchat, setDataRoomchat] = useState([]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setIdGroup(0)
  };

  const handleFitur = (opt) => {
    if (fitur === opt) {
      setFitur("")
      setIdGroup(0)
    }
    else setFitur(opt);
  };

  const handleChatGroup = (id) => {
    setIdGroup(id);
  };

  const getData = (url) => axios.get(url).then((response) => response.data);

  const {
    data: dataInbox,
    isLoading: loadingInbox,
    error: errorInbox,
    mutate: mutateInbox,
  } = useSWR("http://localhost:3000/inbox", getData);

  if (errorInbox) return alert(JSON.stringify(erroroccured));

  const {
    data: dataUsers,
    isLoading: loadingUsers,
    error: errorUsers,
    mutate: mutateUsers,
  } = useSWR("http://localhost:3000/users", getData);

  if (errorUsers) return alert(JSON.stringify(erroroccured));

  const {
    data: dataTask,
    isLoading: loadingTask,
    error: errorTask,
    mutate: mutateTask,
  } = useSWR("http://localhost:3000/task", getData);

  if (errorTask) return alert(JSON.stringify(erroroccured));

  return (
    <div className="bg-primary-darkgrey h-[100vh] flex justify-end">
      {/* {console.log(dataInbox, dataTask, dataUsers)} */}
      {/* {console.log(idGroup)} */}
      <div className="w-[80%] border-l border-l-white flex flex-col h-full justify-between">
        <div className="text-white bg-primary-grey flex p-3 items-center">
          <HiOutlineMagnifyingGlass />
          <input type="text" className="w-full bg-transparent" />
        </div>
        <div className="px-8 pb-8 flex flex-col items-end justify-end h-fit relative">
          <div className="absolute bottom-full right-0 mb-3 mr-8 h-[500px]">
            {fitur === "inbox" ? (
              idGroup !== 0 ? (
                <Roomchat idGroup={idGroup} dataUsers={dataUsers} />
              ) : (
                <Messaging
                  handleChatGroup={handleChatGroup}
                  dataInbox={dataInbox}
                  dataUsers={dataUsers}
                />
              )
            ) : fitur === "task" ? (
              <Todo dataTask={dataTask} />
            ) : (
              ""
            )}
          </div>
          <div className="relative">
            <div
              className={clsx(
                fitur === "" ? "z-50 flex" : "z-0 opacity-0",
                " p-0 bottom-[-5px] cursor-pointer"
              )}
            >
              <img
                src={quickLogo}
                alt=""
                className="w-16 h-16 z-50"
                onClick={handleOpen}
              />
            </div>
            <div
              className={clsx(
                isOpen && fitur !== ""
                  ? "absolute right-4 top-0"
                  : isOpen
                  ? "absolute right-full mr-3 top-1"
                  : "absolute right-1 top-1",
                "transition-all duration-500 ease-linear"
              )}
            >
              <div className="relative">
                <div
                  className={clsx(
                    fitur !== "task" ? "" : "absolute right-full mr-3 bottom-0",
                    "cursor-pointer flex flex-col group transition-all duration-700 ease-linear z-10"
                  )}
                >
                  <div className="text-white text-sm group-hover:block hidden absolute bottom-full mb-2">
                    Inbox
                  </div>
                  <div
                    className="relative"
                    onClick={() => handleFitur("inbox")}
                  >
                    <div
                      className={clsx(
                        fitur === "inbox"
                          ? "bg-primary-grey rounded-[50%] w-16 h-16 opacity-100"
                          : "rounded-[50%] w-14 h-14 opacity-0"
                      )}
                    ></div>
                    <div
                      className={clsx(
                        fitur === "inbox"
                          ? "text-white bg-indicator-purple w-16 h-16 left-4"
                          : "text-indicator-purple bg-white w-14 h-14 left-0",
                        "absolute bottom-0 rounded-[50%] p-4"
                      )}
                    >
                      <RiQuestionAnswerLine className="w-full h-full" />
                    </div>
                  </div>
                </div>

                <div
                  className={clsx(
                    isOpen && fitur === "task"
                      ? ""
                      : isOpen
                      ? "absolute right-full mr-3"
                      : "absolute right-1",
                    "cursor-pointer flex flex-col group bottom-0 transition-all duration-700 ease-linear z-10"
                  )}
                >
                  <div className="text-white text-sm group-hover:block hidden absolute bottom-full mb-2">
                    Task
                  </div>
                  <div className="relative" onClick={() => handleFitur("task")}>
                    <div
                      className={clsx(
                        fitur === "task"
                          ? "bg-primary-grey rounded-[50%] w-16 h-16 opacity-100"
                          : "rounded-[50%] w-14 h-14 opacity-0"
                      )}
                    ></div>
                    <div
                      className={clsx(
                        fitur === "task"
                          ? "text-white bg-indicator-orange w-16 h-16 left-4"
                          : "text-indicator-orange bg-white w-14 h-14 left-0",
                        "absolute bottom-0 rounded-[50%] p-4"
                      )}
                    >
                      <PiBookOpenText className="w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
