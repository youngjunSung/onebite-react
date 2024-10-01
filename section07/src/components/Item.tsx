import { TodoType } from "../typing/types";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";
import { TodoDispatchContextType } from "../App";

// type ExtendTodoType = {
//   handleUpdate: (targetId: number) => void,
//   handleDelete: (targetId: number) => void,
// } & TodoType;

export const Item = memo(({ id, isDone, title, date }: TodoType) => {
  const { handleUpdate, handleDelete } = useContext(
    TodoDispatchContext
  ) as TodoDispatchContextType;
  return (
    <li key={id} className="my-[10px] flex items-center">
      <div className="flex items-center">
        <input id={`chkbox${id}`} type="checkbox" checked={isDone} readOnly />
        <label htmlFor={`chkbox${id}`} className="text-[12px] ml-[6px]" onClick={() => handleUpdate(id)}>
          {title}
        </label>
      </div>
      <div className="flex items-center ml-auto">
        <p className="text-[12px] text-gray-400">{date}</p>
        <button
          type="button"
          className="rounded-[4px] border border-gray-400 text-[10px] px-[4px] ml-[4px]"
          onClick={() => handleDelete(id)}
        >
          삭제
        </button>
      </div>
    </li>
  );
});
Item.displayName = 'Item';