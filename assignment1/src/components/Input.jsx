import React, { useState } from "react";
import uuid from "react-uuid";

export default function Input({ cards, setCards }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleTitle = (event) => setTitle(event.target.value);
  const handleContent = (event) => setContent(event.target.value);
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newCard = {
            id: uuid(),
            title,
            content,
            isDone: false,
          };
          const cardsUpdate = [...cards, newCard];
          setCards(cardsUpdate);
        }}
      >
        제목
        <input value={title} onChange={handleTitle} />
        내용
        <input value={content} onChange={handleContent} />
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
}
