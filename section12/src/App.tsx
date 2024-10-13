import { useState, useReducer } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import Header from "./components/Header";
import { getEmotions } from "./utils/getEmotions";

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
function reducer(state, action) {
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, mockData);

  return (
    <div className="max-w-[600px] w-full mx-auto bg-white flex-1 shadow-[0px_0px_20px_#64646433]">
      <Header
        text="헤더"
        leftChild={<Button text="텍스트" type="default" />}
        rightChild={
          <Button text="텍스트" type="default" onClick={() => alert()} />
        }
      />
      <div className="p-[12px]">
        <ul>
          {mockData.map((e) => {
            return (
              <li>
                <p>{e.createdDate}</p>
                <p>{e.content}</p>
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
