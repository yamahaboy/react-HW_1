import { useState } from "react";
import "./ToDoForm.css";

import { InputText } from "../../components/InputText/InputText";
import { Button } from "../../components/Button/Button";

import { IProps } from "./types";

export const ToDoForm = ({ setFormDataHandler }: IProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const descriptionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = Date.now();
    setFormDataHandler({ id, title, description });

    setTitle("");
    setDescription("");
  };

  return (
    <form className="toDo-form" onSubmit={onSubmitHandler}>
      <h3 className="toDo-form-title">Add toDo</h3>
      <div className="container">
        <InputText placeholder="Title:" value={title} onChange={titleHandler} />
        <InputText
          placeholder="Description:"
          value={description}
          onChange={descriptionHandler}
        />
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
