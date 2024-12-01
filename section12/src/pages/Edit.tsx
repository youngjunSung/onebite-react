import Header from "../components/Header";
import Button from "../components/Button";
import { KeyboardBackspace } from "@mui/icons-material";
import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DiaryDispatchContextType } from "../typing/types";
import { DiaryDispatchContext } from "../App";
import { DiaryStateContext } from "../App";
import dayjs from "dayjs";
import EmotionRadio from "../components/EmotionRadio";
import { usePageTitle } from "../hooks/usePageTitle";

const Edit = () => {
  const { edit } = useParams();
  const nav = useNavigate();
  const DiaryList = useContext(DiaryStateContext);
  const getEditDiary = DiaryList?.filter((e) => e.id === Number(edit))[0];
  const { onModify, onDelete } = useContext(
    DiaryDispatchContext
  ) as DiaryDispatchContextType;
  usePageTitle(`${edit}번 다이어리 수정`);
  const [date, setDate] = useState<string>("");
  const [emoId, setEmoId] = useState<number>(0);
  const [content, setContent] = useState<string>("");
  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmoId(Number(e.target.value));
  };
  const onChageContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    onModify(Number(edit), date, emoId, content);
    nav("/");
  };
  const onRemove = () => {
    onDelete(Number(edit))
    nav("/", { replace: true });
  }
  useEffect(() => {
    setDate(dayjs().format("YYYY-MM-DD"));
    if (getEditDiary) {
      setDate(getEditDiary.createdDate)
      setEmoId(getEditDiary.emotionId);
      setContent(getEditDiary.content)
    }
  }, []);
  return (
    <>
      <Header
        text="다이어리 수정"
        leftChild={
          <button className="w-full center" onClick={() => nav(-1)}>
            <KeyboardBackspace />
          </button>
        }
        rightChild={<Button text="삭제하기" type="negative" onClick={onRemove} />}
      />
      <div className="p-[12px]">
        <div className="mb-[20px]">
          <h2 className="text-[14px] font-bold mb-[10px]">날짜</h2>
          <div>
            <input
              type="date"
              value={dayjs(date).format("YYYY-MM-DD")}
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
                isChecked={emoId === 1}
              />
              <EmotionRadio
                inputId="radio02"
                value={2}
                text="좋음"
                onChangeDate={onChangeRadio}
                isChecked={emoId === 2}
              />
              <EmotionRadio
                inputId="radio03"
                value={3}
                text="보통"
                onChangeDate={onChangeRadio}
                isChecked={emoId === 3}
              />
              <EmotionRadio
                inputId="radio04"
                value={4}
                text="별로"
                onChangeDate={onChangeRadio}
                isChecked={emoId === 4}
              />
              <EmotionRadio
                inputId="radio05"
                value={5}
                text="완전 별로"
                onChangeDate={onChangeRadio}
                isChecked={emoId === 5}
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
            value={content}
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
export default Edit;
