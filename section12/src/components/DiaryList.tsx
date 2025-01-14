import Button from "../components/Button";
import DiaryItem from "./DiaryItem";
import { useContext, useState, useRef, MutableRefObject, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const DiaryList = ({ yeayMonth }: { yeayMonth: string }) => {
  const nav = useNavigate();
  const refItems = useRef<HTMLLIElement[]>([]);
  const diaryList = useContext(DiaryStateContext);
  const [isLatest, setIsLatest] = useState<boolean>(true);
  const sortedDiaryList = diaryList?.sort((a, b) =>
    isLatest
      ? Number(new Date(b.createdDate)) - Number(new Date(a.createdDate))
      : Number(new Date(a.createdDate)) - Number(new Date(b.createdDate))
  );
  const onChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "latest") {
      setIsLatest(true);
    } else {
      setIsLatest(false);
    }
  };
  // useEffect(() => {
  //   console.log(refItems.current);
  // }, [refItems])
  // console.log('effect')
  return (
    <div className="p-[12px]">
      <div className="flex items-center mb-[20px]">
        <select
          className="h-[38px] pr-[10px] text-[14px] font-[500] bg-transparent"
          onChange={onChangeSort}
        >
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
        {sortedDiaryList
          ?.filter(
            (diaryItem) =>
              dayjs(diaryItem.createdDate).format("YYYY년 MM월") === yeayMonth
          )
          .map((diaryItem, idx) => {
            return (
              <DiaryItem
                key={diaryItem.id}
                ref={(el) => {
                  if (el) refItems.current[idx] = el;
                }}
                // id={diaryItem.id}
                // createdDate={diaryItem.createdDate}
                // emotionId={diaryItem.emotionId}
                // content={diaryItem.content}
                {...diaryItem}
              />
            );
          })}
      </ul>
      {/* <DiaryItem /> */}
    </div>
  );
};

export default DiaryList;
