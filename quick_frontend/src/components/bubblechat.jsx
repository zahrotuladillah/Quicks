import clsx from "clsx";
import { BsThreeDots } from "react-icons/bs";
import ChatOption from "./chatOption";
import ChatOptionOther from "./chatOptionOther";
import { useState } from "react";

export default function Bubblechat({data, dataUsers}) {
  const [showOption, setShowOption] = useState(false);
  let name = dataUsers.find((user) => user.id === data.sender.toString())?.name;

  const toggleOption = () => {
    setShowOption(!showOption);
  };
  const handleOptionSelection = (opt, id) => {
    setShowOption(false);
  };

  return (
    <div
      className={clsx(
        data.sender !== 1 ? "flex-row" : "flex-row-reverse ",
        "flex gap-2 w-full"
      )}
    >
      {/* {console.log(data.sender)} */}
      <div className="relative">
        <BsThreeDots onClick={toggleOption} />
        {showOption && (
          <div className="absolute top-full mt-2 left-0 z-10">
            <div className="bg-white rounded-lg border-2">
              {data.sender === 1 ? (
                <ChatOption onOption={handleOptionSelection} id={data.id} />
              ) : (
                <ChatOptionOther
                  onOption={handleOptionSelection}
                  id={data.id}
                />
              )}
            </div>
          </div>
        )}
      </div>
      <div className="max-w-[80%]">
        <div className="w-fit">{name}</div>
        <div
          className={clsx(
            data.sender === 1 ? "bg-chat-lightpurple" : "bg-chat-lightorange",
            "p-3 flex flex-col gap-2"
          )}
        >
          <div className="text-sm">{data.text}</div>
          <div className="text-sm">{data.dateTime}</div>
        </div>
      </div>
    </div>
  );
}
