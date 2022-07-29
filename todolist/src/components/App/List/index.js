// import React, {useState} from "react"
import React from "react";
import ListItem from "../ListItem";

function List({ liItems, onClick }) {
  //   console.log({ liItems });
  return (
    <ul className="todo-list">
      {liItems.map(function (item) {
        return <ListItem key={item} liText={item} onClick={onClick} />;
      })}
    </ul>
  );
}

export default List;
