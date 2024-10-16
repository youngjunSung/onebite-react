import { useState, useReducer, useRef } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import Header from "./components/Header";
import { getEmotions } from "./utils/getEmotions";
import { DiaryType } from "./typing/types";

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
function reducer(state: DiaryType[], action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "MODIFY":
      return state.map((diary) => {
        if (diary.id === action.data.id) {
          return action.data;
        } else {
          return diary;
        }
      });
  }
  return state;
}

function App() {
  const [diaryList, dispatch] = useReducer(reducer, []);
  const refId = useRef(1);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: refId.current++,
        createdDate: createdDate,
        emotionId: emotionId,
        content: content,
      },
    });
  };
  const onModify = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "MODIFY",
      data: {
        id: id,
        createdDate: createdDate,
        emotionId: emotionId,
        content: content,
      },
    });
  };

  return (
    <div className="max-w-[600px] w-full mx-auto bg-white flex-1 shadow-[0px_0px_20px_#64646433]">
      <Header
        text="헤더"
        leftChild={<Button text="텍스트" type="default" />}
        rightChild={
          <Button text="텍스트" type="default" onClick={() => alert()} />
        }
      />
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
        <button>삭제</button>
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
      <Routes>
        {/* switch문처럼 렌더링 된다. url이 / 면 Home, /new면 New  */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:diary" element={<Diary />} />
        <Route path="/edit/:edit" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
