import React, { useState } from "react";
import _ from "lodash";
import AddToDo from "./AddTodo";
import DisplayToDo from "./DisplayTodo";
const Home = () => {
  const [listToDo, setListToDo] = useState([
    { id: 1, name: "study react" },
    { id: 2, name: "Surf Facebook" },
    { id: 3, name: "Watching Youtube" },
  ]);
  const [toDo, setToDo] = useState("");
  let handleDeleteToDo = (id) => {
    console.log("check id", id);
    let currentTodoList = _.clone(listToDo);
    currentTodoList = currentTodoList.filter((item) => item.id !== id);
    setListToDo(currentTodoList);
  };
  let handleClickButton = () => {
    if (!toDo) {
      alert("Todo's can not empty");
    }
    let todo = {
      id: Math.floor(Math.random() * 1000),
      name: toDo,
    };
    setListToDo([...listToDo, todo]);
    setToDo("");
  };
  return (
    <>
      <AddToDo
        handleClickButton={handleClickButton}
        toDo={toDo}
        setToDo={setToDo}
      />
      <div>List ToDo's name</div>
      <DisplayToDo
        listToDo={listToDo}
        setListToDo={setListToDo}
        handleDeleteToDo={handleDeleteToDo}
      />
    </>
  );
};

export default Home;
