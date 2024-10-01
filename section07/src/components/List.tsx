import { useInput } from "../hooks/useInput";
import { TodoType } from "../typing/types";
import { Item } from "./Item";
import { useState, useMemo, useCallback, useContext } from "react";
import { TodoStateContext } from "../App";

export const List = () => {
  const todoList = useContext(TodoStateContext) as TodoType[];
  const [value, setValue, onChange] = useInput("");
  const getFilteredData = useCallback(() => {
    if (!value) {
      return todoList;
    }
    return todoList.filter((todo) => todo.title.includes(value));
  }, [value, todoList]);
  const filteredTodoList = getFilteredData();
  const { getTotal, getDone, getNotDone } = useMemo(() => {
    console.log("data 계산..");
    const getTotal = todoList.length;
    const getDone = todoList.filter((e) => e.isDone === true).length;
    const getNotDone = todoList.filter((e) => e.isDone === false).length;
    return { getTotal, getDone, getNotDone };
  }, [todoList]);
  return (
    <div>
      <h2 className="text-[14px] font-bold mb-[4px]">Todo List</h2>
      <p>
        {getTotal} {getDone} {getNotDone}
      </p>
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
          return (
            <Item
              key={todo.id}
              {...todo}
            />
          );
        })}
      </ul>
    </div>
  );
};
