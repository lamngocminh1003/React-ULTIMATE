import React from "react";
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
        <button type="button" onClick={() => handleClickButton(toDo)}>
          Submit
        </button>{" "}
      </div>
      <br />
    </div>
  );
};
export default AddToDo;
