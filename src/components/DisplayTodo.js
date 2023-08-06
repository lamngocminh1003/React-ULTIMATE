import React, { useState } from "react";
import _ from "lodash";
const DisplayToDo = (props) => {
  let { listToDo, handleDeleteToDo } = props;
  return (
    <div>
      {listToDo &&
        listToDo.length > 0 &&
        listToDo.map((item, index) => {
          return (
            <>
              <div key={item.id}>
                {index + 1} - {item.name}{" "}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDeleteToDo(item.id)}
                >
                  X
                </span>
              </div>
            </>
          );
        })}
    </div>
  );
};
export default DisplayToDo;
