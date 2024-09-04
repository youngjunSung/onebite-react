import { useState, useEffect, useRef, LegacyRef } from "react";
import dayjs from "dayjs";
import { useInput } from "./hooks/useInput";
import { Header } from "./components/Header";
import { Editor } from "./components/Editor";
import { List } from "./components/List";
import { TodoType } from "./typing/types";

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [value, setValue, onChangeValue] = useInput("");
  const refId = useRef(0);
  const refInputAdd = useRef<HTMLInputElement>(null);
  const handleAddTodo = () => {
    if (!value && refInputAdd.current) {
      refInputAdd.current.focus();
      return;
    }
    setTodoList((prevState) => [
      ...prevState,
      {
        id: refId.current++,
        isDone: false,
        title: value,
        date: dayjs(new Date()).format("YYYY-MM-DD"),
      },
    ]);
    setValue("");
    console.dir(todoList);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // console.log(e);
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };
  const handleUpdate = (targetId: number) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (targetId: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== targetId));
  };

  return (
    <>
      <div className="p-[20px]">
        <Header />
        <Editor
          value={value}
          onChangeValue={onChangeValue}
          onKeyDown={onKeyDown}
          handleAddTodo={handleAddTodo}
          ref={refInputAdd}
        />
        <List todoList={todoList} handleUpdate={handleUpdate} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
