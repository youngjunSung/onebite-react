import { useInput } from "../hooks/useInput";
import { TodoType } from "../typing/types";
import { Item } from "./Item";
import { useState } from "react";

export const List = ({
  todoList,
  handleUpdate,
  handleDelete,
}: {
  todoList: TodoType[];
  handleUpdate: (targetId: number) => void;
  handleDelete: (targetId: number) => void;
}) => {
  const [value, setValue, onChange] = useInput("");
  const getFilteredData = () => {
    if (!value) {
      return todoList;
    }
    return todoList.filter((todo) => todo.title.includes(value));
  };
  const filteredTodoList = getFilteredData();
  return (
    <>
      <h2 className="text-[14px] font-bold mb-[4px]">Todo List</h2>
      <input
        type="text"
        className="w-full px-[4px] h-[36px] border-b border-gray-300 text-[12px] placeholder:text-[12px]"
        placeholder="검색어를 입력하세요"
        value={value}
        onChange={onChange}
      />
      <ul>
        {/* {value
          ? todoList
              .filter((todo) => todo.title.includes(value))
              .map((todo) => {
                return <Item key={todo.id} {...todo} />;
              })
          : todoList.map((todo) => {
              return <Item key={todo.id} {...todo} />;
            })} */}
        {filteredTodoList.map((todo) => {
          return <Item key={todo.id} handleUpdate={handleUpdate} handleDelete={handleDelete} {...todo} />;
        })}
      </ul>
    </>
  );
};
