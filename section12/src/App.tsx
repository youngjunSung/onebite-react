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
      localStorage.setItem(String(action.data.id), JSON.stringify(action.data));
      return [...diaryList, action.data];
    case "MODIFY":
      localStorage.removeItem(String(action.data.id));
      localStorage.setItem(String(action.data.id), JSON.stringify(action.data));
      return diaryList.map((diary) =>
        diary.id === action.data.id ? action.data : diary
      );
    case "DELETE":
      localStorage.removeItem(String(action.id));
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
      <DiaryStateContext.Provider value={Object.values(localStorage).map( e => JSON.parse(e))}>
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
    </div>
  );
}

export default App;
