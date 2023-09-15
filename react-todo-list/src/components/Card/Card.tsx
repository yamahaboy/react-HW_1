import React from "react";

import { Button } from "../Button/Button";
import { ToDoListProps } from "./types";

import "./Card.css";

export const Card: React.FC<ToDoListProps> = ({
  toDoData,
  setToDoData,
}: ToDoListProps) => {
  const deleteHandler = (idToDeleteCard: number) => {
    const updatedToDoData = toDoData.filter(({ id }) => id !== idToDeleteCard);

    setToDoData(updatedToDoData);
  };

  return (
    <div className="card">
      {toDoData.map(({ id, title, description }) => (
        <div key={id}>
          <div className="title-card">
            <strong>Title: </strong> {title}
          </div>
          <div className="description-card">
            <strong>Description: </strong> {description}
          </div>
          <Button type="submit" onClick={() => deleteHandler(id)}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};
