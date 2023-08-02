//@ts-ignore
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Search from "./Search/Search";
import List from "./ChatList/List";
import { chatDummyData } from "../../data/data";

const api = "https://fountane-machine-coding-round.ishanjirety1.repl.co/data";
function Chat() {
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setChatData(data.data);
    } catch (error) {
      console.log("error");
    }
  };

  const handleSearch = (keyword: string) => {
    const filterItems = chatDummyData.data.filter((chat) => {
      if (
        chat.orderId.substring(0, keyword.length).toLowerCase() ===
        chat.orderId.toLowerCase()
      ) {
        console.log(filterItems);
      }
    });
  };
  return (
    <div>
      <Navbar />
      <Search handleSearch={handleSearch} />
      {chatData.map((chat) => {
        const messageList =
          chat.messageList.length >= 1
            ? chat.messageList.filter((mssg) => mssg.sender === "USER")
            : "";
        const message: any = messageList[0] || "";
        return (
          <div key={chat.id}>
            <List
              imgUrl={chat.imageUrl}
              userName={chat.title}
              orderId={`Order Id :${chat.orderId}`}
              message={message.message || ""}
            />
            ;
          </div>
        );
      })}

      {/* Right Div
        //bot model ? optional
        ability to send user a text
        input for the user
        */}
    </div>
  );
}

export default Chat;
