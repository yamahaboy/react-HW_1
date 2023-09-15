import React from "react";

import { Button } from "../../components/Button/Button";
import { CardProps } from "./types";

import "./Card.css";

export const Card: React.FC<CardProps> = ({
  title,
  description,
  onDelete,
}: CardProps) => {
  return (
    <div className="card">
      <div className="title-card">
        <strong>Title: </strong> {title}
      </div>
      <div className="description-card">
        <strong>Description: </strong> {description}
      </div>
      <Button type="submit" onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};
