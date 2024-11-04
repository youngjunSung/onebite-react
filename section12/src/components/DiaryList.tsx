import Button from "../components/Button";
import DiaryItem from "./DiaryItem";
import { useContext } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const DiaryList = ({ yeayMonth }: { yeayMonth: string }) => {
  const nav = useNavigate();
  const diaryList = useContext(DiaryStateContext);
  return (
    <div className="p-[12px]">
      <div className="flex items-center mb-[20px]">
        <select className="h-[38px] pr-[10px] text-[12px]">
          <option value="latest">최신순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <Button
          text="새 다이어리 쓰기"
          type="positive"
          className="ml-auto w-fit"
          onClick={() => nav("/new")}
        />
      </div>
      <ul>
        {diaryList
          ?.filter(
            (diaryItem) =>
              dayjs(diaryItem.createdDate).format("YYYY년 MM월") === yeayMonth
          )
          .map((diaryItem) => {
            return (
              <DiaryItem
                key={diaryItem.id}
                id={diaryItem.id}
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
