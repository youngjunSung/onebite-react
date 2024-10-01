import dayjs from "dayjs";
import { forwardRef, LegacyRef, Ref, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";
import { TodoDispatchContextType } from "../App";

export const Editor = forwardRef(
  (
    {
      value,
      onChangeValue,
      onKeyDown,
    }: {
      value: string;
      onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
      onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    },
    ref: Ref<HTMLInputElement>
  ) => {
    // const refInput = useRef(null);
    const { handleAddTodo } = useContext(TodoDispatchContext) as TodoDispatchContextType;
    // console.dir(data)
    return (
      <div className="flex mb-[14px]">
        <input
          type="text"
          className="w-full px-[4px] border-r-0 border border-gray-300 text-[12px] placeholder:text-[12px]"
          value={value}
          onKeyDown={onKeyDown}
          onChange={onChangeValue}
          ref={ref}
        />
        <button
          type="submit"
          className="text-white bg-[#097be0] shrink-0 px-[10px] py-[4px] text-[12px]"
          onClick={handleAddTodo}
        >
          추가
        </button>
      </div>
    );
  }
);
