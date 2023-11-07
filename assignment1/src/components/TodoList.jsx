import React from "react";

export default function TodoList({
    cards,handleComplete, handleDelete,listIsDone
}) {
  return (
    <>
      <div>
        <h2>{listIsDone ? "완료 목록" : "할 일 목록" }</h2>
        {cards
          .filter((item) => item.isDone === listIsDone)
          .map((item) => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  margin: "10px",
                  padding: "10px",
                }}
                key={item.id}
              >
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <button onClick={() => handleComplete(item)}>완료</button>
                <button onClick={() => handleDelete(item.id)}>삭제</button>
              </div>
            );
          })}
      </div>
    </>
  );
}
