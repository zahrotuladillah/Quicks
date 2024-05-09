import clsx from "clsx";

export default function BookmarkOption({ onOption, id }) {
    const options = [
      { id: 1, value: "Important ASAP", color:"stickers-slate"},
      { id: 2, value: "Offline Meeting", color:"stickers-orange"},
      { id: 2, value: "Virtual Meeting", color:"stickers-yellow"},
      { id: 2, value: "ASAP", color:"stickers-cyan"},
      { id: 2, value: "Client Related", color:"stickers-green"},
      { id: 2, value: "Self Task", color:"stickers-purple"},
      { id: 2, value: "Appointments", color:"stickers-pink"},
      { id: 2, value: "Court Related", color:"stickers-blue"},
    ];
    return (
      <div className="bg-white rounded-md border w-fit h-fit p-3">
        {options.map((option) => (
          <div
            key={option.id}
            className={clsx(`bg-[option.color]`,"py-3 px-8 cursor-pointer capitalize rounded-lg")}
            onClick={() => onFilterSelection(option.value, id)}
          >
            {option.value}
          </div>
        ))}
      </div>
    );
  }