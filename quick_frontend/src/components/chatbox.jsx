import clsx from "clsx";
import { FaRegUser } from "react-icons/fa6";
import FormatDateTime from "../tools/formatdatetime";

export default function Chatbox({ data, dataUsers }) {
  const lastUserID = (data.chats[data.chats.length - 1].sender).toString();
  const lastUserName = dataUsers.find((user) => user.id === lastUserID)?.name;
  return (
    <div className="flex gap-8 py-[22px]">
      <div className="relative">
        <div className="bg-primary-lightgrey p-3 text-primary-darkgrey rounded-[50%]">
          <FaRegUser />
        </div>
        <div className="bg-primary-blue p-3 text-white absolute left-[50%] top-0 rounded-[50%]">
          <FaRegUser />
        </div>
      </div>
      <div className="flex justify-between w-[90%]">
        <div className="">
          <div className="text-base font-bold">{data.groupName}</div>
          <div className="text-sm font-bold">{lastUserName}</div>
          <div className="text-sm text-ellipsis">
            {data.chats[data.chats.length - 1].text}
          </div>
        </div>
        <div className="text-sm font-light">
          {FormatDateTime(data.chats[data.chats.length - 1].dateTime)}
        </div>
      </div>
    </div>
  );
}
