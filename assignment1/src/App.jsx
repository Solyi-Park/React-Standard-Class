import { useState } from "react";
import "./App.css";

function App() {
 
  const [todo, setTodo] = useState([
    { 
      id: 1, 
      title: "sample title", 
      content: "sample content",
      isDone: "false"
    },
  ]);
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleChangeTitle = (e) => setTitle(e.target.value)
  const handleChangeContent = (e) => setContent(e.target.value)
  const handleClickAddBtn = function(item) {
    const newTodo = {
      id: todo.length + 1,
      title,
      content,
      isDone: "false"
    }
    setTodo(newTodo);
  }

  }

  return (
    <div>
      <div>
        제목
        <input value={title} onChange={handleChangeTitle} type="text" />
        내용
        <input value={content} onChange={handleChangeContent}type="text" />
        <button onClick={() => handleClickAddBtn(item)}>추가하기</button>
      </div>

      <div> 
        {
          todo.map((item) => {
            return (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <button onClick={handleDeleteBtn}>Delete</button>
                <button onClick={handleCompleteBtn}>Complete</button>
              </div>
            )
          })
        }
      </div>

      <div
        style={{
          backgroundColor: "yellow",
        }}
      >
        푸터
      </div>
    </div>
  );


export default App;
