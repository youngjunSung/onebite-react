import Button from "../components/Button";
import DiaryItem from "./DiaryItem";
import { useContext } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const DiaryList = () => {
  const nav = useNavigate();
  const diaryList = useContext(DiaryStateContext);
  return (
    <div className="p-[12px]">
      <div className="flex items-center mb-[20px]">
        <select className="h-[38px] pr-[10px]">
          <option value="최신순">최신순</option>
          <option value="오래된 순">오래된 순</option>
        </select>
        <Button
          text="새 다이어리 쓰기"
          type="positive"
          className="ml-auto w-fit"
          onClick={() => nav("/new")}
        />
      </div>
      <ul>
        {diaryList?.map((diaryItem) => {
          return (
            <DiaryItem
              key={diaryItem.id}
              createdDate={diaryItem.createdDate}
              emotionId={diaryItem.emotionId}
              content={diaryItem.content}
            />
          );
        })}
      </ul>
      {/* <DiaryItem /> */}
    </div>
  );
};

export default DiaryList;
