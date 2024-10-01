import { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";

// "/" : home
// "/new" : 새로운 일기 생성 페이지
// "/diary" : 일기 상세 조회 페이지
function App() {
  const nav = useNavigate();
  const handleClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <div>
        <Link to={"/"}>home</Link>
        <Link to={"/new"}>new</Link>
        <Link to={"/diary"}>diary</Link>
      </div>
      <button onClick={handleClickButton}>new 이동</button>
      <Routes>
        {/* switch문처럼 렌더링 된다. url이 / 면 Home, /new면 New  */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:diary" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
