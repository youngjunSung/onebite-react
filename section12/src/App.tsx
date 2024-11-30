import { useState, useReducer, useRef, createContext, useEffect } from "react";
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
      type: "INIT";
      data: DiaryType[];
    }
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
  let nextState;
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      nextState = [...diaryList, action.data];
      break;
    case "MODIFY":
      nextState = diaryList.map((diary) =>
        diary.id === action.data.id ? action.data : diary
      );
      break;
    case "DELETE":
      nextState = diaryList.filter((diary) => diary.id !== action.id);
      break;
    default:
      nextState = diaryList;
      break;
  }
  localStorage.setItem("diaryList", JSON.stringify(nextState));
  return nextState;
}
export const DiaryStateContext = createContext<DiaryType[] | null>(null);
export const DiaryDispatchContext =
  createContext<DiaryDispatchContextType | null>(null);
function App() {
  const [diaryList, dispatch] = useReducer(reducer, []);
  const [isLoading, setIsLoading] = useState(true);
  const refId = useRef(0);
  useEffect(() => {
    const storedData = localStorage.getItem("diaryList");
    if (!storedData) {
      setIsLoading(false);
      return;
    }
    const parsedData: DiaryType[] = JSON.parse(storedData);
    dispatch({
      type: "INIT",
      data: parsedData,
    });
    refId.current =
      Math.max(...parsedData.map((diary) => Number(diary.id))) + 1;
    setIsLoading(false);
  }, []);

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

  if (isLoading) {
    return <div>로딩 중..</div>;
  }

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
    </div>
  );
}

export default App;
