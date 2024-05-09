import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineBookmarks } from "react-icons/md";
import clsx from "clsx";

export default function Task({data}) {
  const [isExpand, setIsExpand] = useState(false);
  const [showOption, setShowOption] = useState(false);

  const toggleOption = () => {
    setShowOption(!showFilter);
  };

  const handleOptionSelection = (opt) => {
    setShowOption(false);
  };

  const handleExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div>
      <div className="flex">
        <div className="flex gap-3">
          <div className="w-[45%]">{name}</div>
          <div className="w-[50%]">
            <div className="text-red-600 text-sm">4 Days Left</div>
            <div>{data.endDate}</div>
            <div>
              {isExpand ? (
                <IoIosArrowUp onClick={handleExpand} />
              ) : (
                <IoIosArrowDown onClick={handleExpand} />
              )}
            </div>
            <div>
              <BsThreeDots />
              {showFilter && (
                <div className="absolute top-full mt-2 left-0 z-10">
                  <div className="bg-white rounded-lg border-2">
                    <ChatOption onOption={handleOptionSelection} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <FiClock />
          <input type="date" />
        </div>
        <div>
          <MdOutlineEdit />
          <div>{description ? description : "No Description"}</div>
        </div>
        <div className="relative"> 
          <MdOutlineBookmarks />
          {showOption && (
          <div className="absolute top-full mt-2 left-0 z-10">
            {data.bookmark?.map((data) => (
              <div className={clsx(data.color)}>{data.name}</div>
            ))}
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
