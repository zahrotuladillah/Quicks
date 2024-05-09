import clsx from "clsx";
import Bubblechat from "../components/bubblechat";
import { FaArrowLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HashLoader } from "react-spinners";
import axios from "axios";
import useSWR from "swr";
import FormatDateTime from "../tools/formatdatetime";
import RoomchatComponent from "../components/roomchatComponent";

export default function Roomchat({ idGroup, dataUsers }) {
  const getData = (url) => axios.get(url).then((response) => response.data);
  const {
    data: dataRoomChat,
    isLoading,
    error,
    mutate,
  } = useSWR(`http://localhost:3000/inbox/${idGroup}`, getData);

  if (!dataRoomChat) {
    return <HashLoader />;
  }

  if (error) return alert(JSON.stringify(error));

  return (
    <div className="bg-white py-6 px-8 rounded-md h-full w-full overflow-y-auto scroll">
      {/* {console.log("room",dataUsers)} */}
      <div className="flex justify-between sticky top-[-23px] bg-white w-full py-3 items-center">
        <div className="flex gap-3">
          <FaArrowLeft />
          <div>
            <div className="font-bold text-base">{dataRoomChat.groupName}</div>
            <div className="text-sm">
              Participant {dataRoomChat.participants.length} Partisipan
            </div>
          </div>
        </div>
        <IoClose />
      </div>
      <RoomchatComponent dataRoomChat={dataRoomChat} dataUsers={dataUsers}/>
      <div className="flex w-full justify-between mt-5 ">
        <input
          type="text"
          className="rounded-md p-4 w-[80%] bg-primary-lightgrey"
          placeholder="Type a new message"
        />
        <button className="bg-primary-blue px-4 rounded-md text-white">
          Send
        </button>
      </div>
    </div>
  );
}
