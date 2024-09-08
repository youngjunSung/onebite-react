import { useState, useEffect, useRef, LegacyRef, useReducer } from "react";
import dayjs from "dayjs";
import { useInput } from "./hooks/useInput";
import { Header } from "./components/Header";
import { Editor } from "./components/Editor";
import { List } from "./components/List";
import { TodoType } from "./typing/types";
import { Exam } from "./components/Exam";

// interface AddAction {
//   type: "ADD";
//   data: TodoType;
// }

// interface UpdateAction {
//   type: "UPDATE";
//   targetId: number;
// }

// interface DeleteAction {
//   type: "DELETE";
//   targetId: number;
// }

// type Action = AddAction | UpdateAction | DeleteAction;

// type: string으로 지정하면, 모든 string 값을 허용하게 됩니다. 이로 인해 타입스크립트는 액션의 타입을 정확하게 추론하지 못하고, data와 targetId가 동시에 존재할 가능성도 있다고 오해할 수 있습니다. 따라서 타입 체크가 제대로 이루어지지 않아 조건문 내에서 action.data나 action.targetId에 접근할 때 에러가 발생합니다.
// type Action = {type: string, data: TodoType} | {type: string, targetId: number};

// type 필드를 고정된 문자열 값(리터럴 타입)으로 설정해야 한다
type Action = {type: "ADD", data: TodoType} | {type: "UPDATE", targetId: number} | {type: "DELETE", targetId: number};

function reducer(state: TodoType[], action: Action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.data];
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  // const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [todoList, dispatch] = useReducer(reducer, [])
  const [value, setValue, onChangeValue] = useInput("");
  const refId = useRef(0);
  const refInputAdd = useRef<HTMLInputElement>(null);
  const handleAddTodo = () => {
    if (!value && refInputAdd.current) {
      refInputAdd.current.focus();
      return;
    }
    // setTodoList((prevState) => [
    //   ...prevState,
    //   {
    //     id: refId.current++,
    //     isDone: false,
    //     title: value,
    //     date: dayjs(new Date()).format("YYYY-MM-DD"),
    //   },
    // ]);
    dispatch({
      type: "ADD",
      data: {
        id: refId.current++,
        isDone: false,
        title: value,
        date: dayjs(new Date()).format("YYYY-MM-DD"),
      },
    });
    setValue("");
    console.dir(todoList);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };
  const handleUpdate = (targetId: number) => {
    // setTodoList(
    //   todoList.map((todo) =>
    //     todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
    //   )
    // );
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  };
  const handleDelete = (targetId: number) => {
    // setTodoList(todoList.filter((todo) => todo.id !== targetId));
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  };

  return (
    <>
      <div className="p-[20px]">
        <Exam />
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
