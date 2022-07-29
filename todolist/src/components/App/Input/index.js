// import React, {useState} from "react"
// import setValue from "../index"

function Input({ onSubmit }) {
  // const [value, setValue] = useState("");

  return (
    <form className="addDestination" onSubmit={onSubmit}>
      <label>
        Add a new destination:
        <input
          type="text"
          className="list-input"
          // onChange={e => setValue(e.target.value)}
          name="newItem"
        />
      </label>
      <input className="buttony" type="submit" value="Add" />
    </form>
  );
}

export default Input;
