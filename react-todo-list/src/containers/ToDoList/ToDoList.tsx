import React from "react";
import "./ToDoList.css";

import { ToDoListProps } from "./types";
import { Button } from "../../components/Button/Button";

export const ToDoList: React.FC<ToDoListProps> = ({
  toDoData,
  setToDoData,
}: ToDoListProps) => {
  const deleteHandler = (idToDeleteCard: number) => {
    const updatedToDoData = toDoData.filter(({ id }) => id !== idToDeleteCard);

    setToDoData(updatedToDoData);
  };

  return (
    <div className="toDo-list">
      <h3 className="toDo-list-title">ToDo List</h3>
      <div className="list">
        {toDoData.map(({ id, title, description }) => (
          <div key={id}>
            <div className="title-list">
              <strong>Title: </strong> {title}
            </div>
            <div className="description-list">
              <strong>Description: </strong> {description}
            </div>
            <Button type="submit" onClick={() => deleteHandler(id)}>
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
