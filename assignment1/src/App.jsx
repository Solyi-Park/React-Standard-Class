import React, { useState } from "react";
import uuid from "react-uuid";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [cards, setCards] = useState([
    {
      id: uuid(),
      title: "Sample title",
      content: "Sample content",
      isDone: false,
    },
    {
      id: uuid(),
      title: "Sample title",
      content: "Sample content",
      isDone: true,
    },
  ]);


  const handleCancel = (item) => {
    const moveToWorking = cards.map((card) => {
      if (card.id === item.id) {
        return { ...card, isDone: !item.isDone };
      } else {
        return card;
      }
    });
    setCards(moveToWorking);
  };

  const handleComplete = (item) => {
    const moveToDone = cards.map((card) => {
      if (card.id === item.id) {
        return { ...card, isDone: !item.isDone };
      } else {
        return card;
      }
    });
    setCards(moveToDone);
  };
  const handleDelete = (id) => {
    const cardsUpdate = cards.filter((card) => {
      return card.id !== id;
    });
    setCards(cardsUpdate);
  };

  return (
    <div>
      <header
        style={{
          backgroundColor: "#e67a73",
        }}
      >
        Todo List
      </header>
      <main
        style={{
          backgroundColor: "#b7f59f",
        }}
      >
      <Input cards={cards} setCards={setCards}/>  
        <div>
          <TodoList cards={cards} 
          handleComplete={handleComplete} 
          handleDelete={handleDelete} 
          listIsDone={false}/>
          <TodoList cards={cards} 
          handleComplete={handleComplete} 
          handleDelete={handleDelete} 
          listIsDone={true}/>
                  </div>
      </main>
      <footer
        style={{
          backgroundColor: "#9fb5f5",
        }}
      >
        footer
      </footer>
    </div>
  );
}

export default App;
