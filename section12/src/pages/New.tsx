import Header from "../components/Header";
import Button from "../components/Button";
import { getEmotions } from "../utils/getEmotions";
import { KeyboardBackspace } from "@mui/icons-material";
import { useState, useContext, useEffect, useRef, useMemo, memo } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContextType } from "../typing/types";
import { DiaryDispatchContext } from "../App";
import EmotionRadio from "../components/EmotionRadio";
import dayjs from "dayjs";

const New = () => {
  const nav = useNavigate();
  const { onCreate } = useContext(
    DiaryDispatchContext
  ) as DiaryDispatchContextType;
  const [date, setDate] = useState<string>("");
  const [emoId, setEmoId] = useState<number>(0);
  const [content, setContent] = useState<string>("");
  const refInputDate = useRef<HTMLInputElement>(null);
  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    if (refInputDate.current) refInputDate.current.value = e.target.value;
  };
  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmoId(Number(e.target.value));
  };
  const onChageContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    onCreate(date, emoId, content);
    nav("/");
  };
  useEffect(() => {
    setDate(dayjs().format("YYYY-MM-DD"));
  }, []);
  return (
    <>
      <Header
        text="새 다이어리 쓰기"
        leftChild={
          <button className="w-full center" onClick={() => nav(-1)}>
            <KeyboardBackspace />
          </button>
        }
      />
      <div className="p-[12px]">
        <div className="mb-[20px]">
          <h2 className="text-[14px] font-bold mb-[10px]">날짜</h2>
          <div>
            <input
              type="date"
              ref={refInputDate}
              value={date}
              className="text-[14px] bg-[#ececec] py-[4px] px-[12px] rounded-[6px]"
              onChange={onChangeDate}
            />
          </div>
        </div>
        <div className="mb-[20px]">
          <h2 className="text-[14px] font-bold mb-[10px]">감정 상태</h2>
          <div>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] auto-rows-auto gap-[4px]">
              <EmotionRadio
                inputId="radio01"
                value={1}
                text="완전 좋음"
                onChangeDate={onChangeRadio}
              />
              <EmotionRadio
                inputId="radio02"
                value={2}
                text="좋음"
                onChangeDate={onChangeRadio}
              />
              <EmotionRadio
                inputId="radio03"
                value={3}
                text="보통"
                onChangeDate={onChangeRadio}
              />
              <EmotionRadio
                inputId="radio04"
                value={4}
                text="별로"
                onChangeDate={onChangeRadio}
              />
              <EmotionRadio
                inputId="radio05"
                value={5}
                text="완전 별로"
                onChangeDate={onChangeRadio}
              />
            </ul>
          </div>
        </div>
        <div className="mb-[20px]">
          <h2 className="text-[14px] font-bold mb-[10px]">내용</h2>
          <textarea
            name=""
            id=""
            onChange={onChageContent}
            className="w-full min-h-[200px] resize-y rounded-[6px] p-[20px] bg-[#ececec]"
          ></textarea>
        </div>
        <div className="flex gap-[10px]">
          <Button text="취소하기" onClick={() => nav("/")} />
          <Button text="작성완료" type="positive" onClick={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default New;
