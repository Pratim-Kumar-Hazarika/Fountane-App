import React from "react";
import "./list.css";

function List({ imgUrl, userName, orderId, message }: any) {
  console.log(imgUrl);
  return (
    <div className="listContainer">
      <div className="avatar">
        <img src={imgUrl} />
      </div>
      <div className="chatDetails">
        <div className="userName">{userName}</div>
        <div className="orderId">{orderId}</div>
        <div>{message}</div>
      </div>
    </div>
  );
}

export default List;
