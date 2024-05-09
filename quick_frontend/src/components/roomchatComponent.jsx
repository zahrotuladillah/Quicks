import clsx from "clsx";
import FormatDateTime from "../tools/formatdatetime";
import Bubblechat from "./bubblechat";


export default function RoomchatComponent ({dataRoomChat, dataUsers}) {
    return dataRoomChat.chats?.map((data, i) => {
      const currentDateTime = FormatDateTime(data.dateTime);
      const previousData = i > 0 ? dataRoomChat.chats[i - 1] : null;
      // console.log(previousData)
      const previousDateTime = previousData
        ? FormatDateTime(previousData.dateTime)
        : null;

      // Mendapatkan tanggal hari ini dan kemarin dalam format yang sama dengan tanggal pesan
      const todayDate = new Date().toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      const yesterdayDate = new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      // let name = dataUsers.find((user) => user.id === (data.sender).toString())?.name;
      // if (data.sender === "1") name = "you";

      return (
        <div key={data.id} className="w-full">
          {previousDateTime !== currentDateTime && (
            <div className="flex w-full items-center gap-2 text-gray-600">
              <hr
                className={clsx(
                  data.dateTime === todayDate
                    ? "border-primary-grey"
                    : "border-indicator-red",
                  "w-full border-2"
                )}
              />
              <div className="font-semibold text-gray-400">
                {data.dateTime === todayDate
                  ? `Today, ${currentDateTime}`
                  : data.dateTime === yesterdayDate
                  ? `Yesterday, ${currentDateTime}`
                  : currentDateTime}
              </div>
              <hr
                className={clsx(
                  data.dateTime === todayDate
                    ? "border-primary-grey"
                    : "border-indicator-red",
                  "w-full border-2"
                )}
              />
            </div>
          )}
          {/* {console.log(name,data.text, data.dateTime)} */}
          <Bubblechat data={data} dataUsers={dataUsers} />
        </div>
      );
    });
  };