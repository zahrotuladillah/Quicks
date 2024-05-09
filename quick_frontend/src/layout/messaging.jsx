import Chatbox from "../components/chatbox";
import SearchBox from "../components/searchbox";

export default function Messaging({handleChatGroup, dataInbox, dataUsers}) {
  return (
    <div className="py-6 px-8 bg-white rounded-md h-full w-full overflow-y-auto scroll">
      <div className=" top-0"><SearchBox/></div>
      {dataInbox?.map((data, i) => (
        <div key={data.id} onClick={()=>handleChatGroup(data.id)} className="cursor-pointer">
          <Chatbox data={data} dataUsers={dataUsers}/>
          {i < data.length && <hr />}
        </div>
      ))}
    </div>
  );
}
