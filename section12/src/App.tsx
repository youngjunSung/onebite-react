import { useState, useReducer, useRef, createContext } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import Header from "./components/Header";
import { getEmotions } from "./utils/getEmotions";
import { DiaryType, DiaryDispatchContextType } from "./typing/types";

const mockData = [
  {
    id: 1,
    createdDate: new Date().toLocaleString("en-US").split(", ")[0],
    emotionId: 1,
    content: "1번 일기내용",
  },
  {
    id: 2,
    createdDate: new Date().toLocaleString("en-US").split(", ")[0],
    emotionId: 2,
    content: "2번 일기내용",
  },
];
type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        createdDate: string;
        emotionId: number;
        content: string;
      };
    }
  | {
      type: "MODIFY";
      data: {
        id: number;
        createdDate: string;
        emotionId: number;
        content: string;
      };
    }
  | {
      type: "DELETE";
      id: number;
    };
function reducer(diaryList: DiaryType[], action: Action) {
  switch (action.type) {
    case "CREATE":
      return [...diaryList, action.data];
    case "MODIFY":
      return diaryList.map((diary) =>
        diary.id === action.data.id ? action.data : diary
      );
    case "DELETE":
      return diaryList.filter((diary) => diary.id !== action.id);
    default:
      return diaryList;
  }
}
export const DiaryStateContext = createContext<DiaryType[] | null>(null);
export const DiaryDispatchContext =
  createContext<DiaryDispatchContextType | null>(null);
function App() {
  const [diaryList, dispatch] = useReducer(reducer, []);
  const refId = useRef(1);

  const onCreate = (
    createdDate: string,
    emotionId: number,
    content: string
  ) => {
    dispatch({
      type: "CREATE",
      data: {
        id: refId.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };
  const onModify = (
    id: number,
    createdDate: string,
    emotionId: number,
    content: string
  ) => {
    dispatch({
      type: "MODIFY",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <div className="max-w-[600px] w-full mx-auto bg-white flex-1 shadow-[0px_0px_20px_#64646433]">
      <DiaryStateContext.Provider value={diaryList}>
        <DiaryDispatchContext.Provider value={{ onCreate, onModify, onDelete }}>
          <Routes>
            {/* switch문처럼 렌더링 된다. url이 / 면 Home, /new면 New  */}
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:diary" element={<Diary />} />
            <Route path="/edit/:edit" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
      <div className="p-[12px] flex gap-[10px]">
        <button
          onClick={() =>
            onCreate(
              new Date().toLocaleString("en-US").split(", ")[0],
              1,
              "new text"
            )
          }
        >
          추가
        </button>
        <button
          onClick={() =>
            onModify(
              2,
              new Date().toLocaleString("en-US").split(", ")[0],
              1,
              "sdfsdfsdfsd text"
            )
          }
        >
          수정
        </button>
        <button onClick={() => onDelete(2)}>삭제</button>
      </div>
      <div className="p-[12px]">
        <ul>
          {diaryList.map((diary: DiaryType, idx: number) => {
            return (
              <li key={idx}>
                <p>{diary.createdDate}</p>
                <p>{diary.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
