export default function ChatOption({ onOption, id }) {
    const options = [
      { id: 1, value: "Edit"},
      { id: 2, value: "Delete"},
    ];
    return (
      <div className="bg-white rounded-md border w-fit h-fit">
        {options.map((option) => (
          <div
            key={option.id}
            className="py-3 px-8 cursor-pointer capitalize bg-white hover:bg-slate-300"
            onClick={() => onFilterSelection(option.value, id)}
          >
            {option.value}
          </div>
        ))}
      </div>
    );
  }