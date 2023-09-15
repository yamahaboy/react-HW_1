import React from "react";

import { Card } from "../../components/Card/Card";
import { ToDoListProps } from "../../components/Card/types";

import "./ToDoList.css";

export const ToDoList: React.FC<ToDoListProps> = ({
  toDoData,
  setToDoData,
}: ToDoListProps) => {
  return (
    <div className="toDo-list">
      <h3 className="toDo-list-title">ToDo List</h3>
      <Card toDoData={toDoData} setToDoData={setToDoData} />
    </div>
  );
};
