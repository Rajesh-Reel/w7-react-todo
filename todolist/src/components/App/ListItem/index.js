// import React, {useState} from "react"
import React from "react";

function ListItem({ liText, onClick }) {
  // const array = [];

  return (
    <li className="li-item" name="liText" data-key={liText}>
      {liText}
      <input
        type="button"
        value="❌"
        name="delete-button"
        class="delete"
        data-key={liText}
        onClick={onClick}
      />
    </li>
  );
}

export default ListItem;
