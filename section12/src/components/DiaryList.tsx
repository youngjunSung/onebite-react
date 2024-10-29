import Button from "../components/Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";

const DiaryList = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="p-[12px] flex items-center">
        <select className="h-[38px] pr-[10px]">
          <option value="최신순">최신순</option>
          <option value="오래된 순">오래된 순</option>
        </select>
        <Button
          text="새 일기 쓰기"
          type="positive"
          className="ml-auto w-fit"
          onClick={() => nav("/new")}
        />
      </div>
      <DiaryItem />
    </>
  );
};

export default DiaryList;
