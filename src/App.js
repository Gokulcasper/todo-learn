import React, { useState } from "react";
import "./App.css";
import listItem from "./components/ListItem";
import ListItem from "./components/ListItem";
const App = () => {
  const [Name, setName] = useState("");
  const [list, setList] = useState([]);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const clicked = () => {
    setList([
      ...list,
      {
        name: Name,
        completed: false,
      },
    ]);
    setName("");
  };

  const onDone = (item) => {
    let newList = list.map((listItem) => {
      if (listItem.name === item.name) {
        return { ...listItem, completed: !listItem.completed };
      }
      return listItem;
    });
    console.log(item);
    setList(newList);
  };

  const onDelete = (item) => {
    let newList = list.filter((listItem) => {
      if (listItem.name === item.name) {
        return false;
      }
      return true;
    });
    console.log(item);
    setList(newList);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <input
        type="text"
        placeholder="Add Name"
        value={Name}
        onChange={updateName}
      />
      <button onClick={clicked}>Add todo</button>
      {list.map((item) => (
        <ListItem obj={item} onDone={onDone} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default App;
