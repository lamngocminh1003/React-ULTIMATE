import React, { useState } from "react";
import _ from "lodash";
const AddToDo = (props) => {
  const { setToDo, handleClickButton, toDo } = props;
  return (
    <div>
      <div>
        <label> Add to do list:</label>
        <input
          type="text"
          onChange={(event) => {
            setToDo(event.target.value);
          }}
          value={toDo}
        />
      </div>
      <br />
      <br />
      <button type="button" onClick={() => handleClickButton(toDo)}>
        Submit
      </button>{" "}
      <br />
    </div>
  );
};
export default AddToDo;
