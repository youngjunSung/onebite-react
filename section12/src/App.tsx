import { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";

// import emotion1 from "./assets/emotion1.png";
// import emotion2 from "./assets/emotion2.png";
// import emotion3 from "./assets/emotion3.png";
// import emotion4 from "./assets/emotion4.png";
// import emotion5 from "./assets/emotion5.png";

import { getEmotions } from "./utils/getEmotions";

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
      <div className="flex">
        <img src="/emotion1.png" alt="" />
      </div>
      <div className="flex">
        <img src={getEmotions(1)} alt="" />
        <img src={getEmotions(2)} alt="" />
        <img src={getEmotions(3)} alt="" />
        <img src={getEmotions(4)} alt="" />
        <img src={getEmotions(5)} alt="" />
      </div>
      <div className="border border-b-amber-500">
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
