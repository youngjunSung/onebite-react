import Header from "../components/Header";
import Button from "../components/Button";
import { getEmotions } from "../utils/getEmotions";
import { KeyboardBackspace } from "@mui/icons-material";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContextType } from "../typing/types";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const nav = useNavigate();
  const { onCreate } = useContext(
    DiaryDispatchContext
  ) as DiaryDispatchContextType;
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
    onCreate(date, emoId, content);
    nav("/");
  };
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
              value="2024-10-30"
              className="text-[14px] bg-[#ececec] py-[4px] px-[12px] rounded-[6px]"
              onChange={onChangeDate}
            />
          </div>
        </div>
        <div className="mb-[20px]">
          <h2 className="text-[14px] font-bold mb-[10px]">감정 상태</h2>
          <div>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] auto-rows-auto gap-[4px]">
              <li className="flex flex-col">
                <input
                  id="radio01"
                  name="radioEmotion"
                  type="radio"
                  value={1}
                  onChange={onChangeRadio}
                  className="sr-only peer"
                />
                <label
                  htmlFor="radio01"
                  className="flex-col flex items-center bg-[#ececec] p-[14px] rounded-[6px] flex-1 peer-checked:bg-[#64c964] peer-checked:text-white"
                >
                  <img
                    src={getEmotions(1)}
                    alt=""
                    className="w-[24px] mb-[6px]"
                  />
                  <p className="text-[12px] font-[500] text-center">
                    완전 좋음
                  </p>
                </label>
              </li>
              <li className="flex flex-col">
                <input
                  id="radio02"
                  name="radioEmotion"
                  type="radio"
                  value={2}
                  onChange={onChangeRadio}
                  className="sr-only peer"
                />
                <label
                  htmlFor="radio02"
                  className="flex-col flex items-center bg-[#ececec] p-[14px] rounded-[6px] flex-1 peer-checked:bg-[#9dd772] peer-checked:text-white"
                >
                  <img
                    src={getEmotions(2)}
                    alt=""
                    className="w-[24px] mb-[6px]"
                  />
                  <p className="text-[12px] font-[500] text-center">좋음</p>
                </label>
              </li>
              <li className="flex flex-col">
                <input
                  id="radio03"
                  name="radioEmotion"
                  type="radio"
                  value={3}
                  onChange={onChangeRadio}
                  className="sr-only peer"
                />
                <label
                  htmlFor="radio03"
                  className="flex-col flex items-center bg-[#ececec] p-[14px] rounded-[6px] flex-1 peer-checked:bg-[#fdce17] peer-checked:text-white"
                >
                  <img
                    src={getEmotions(3)}
                    alt=""
                    className="w-[24px] mb-[6px]"
                  />
                  <p className="text-[12px] font-[500] text-center">보통</p>
                </label>
              </li>
              <li className="flex flex-col">
                <input
                  id="radio04"
                  name="radioEmotion"
                  type="radio"
                  value={4}
                  onChange={onChangeRadio}
                  className="sr-only peer"
                />
                <label
                  htmlFor="radio04"
                  className="flex-col flex items-center bg-[#ececec] p-[14px] rounded-[6px] flex-1 peer-checked:bg-[#fd8446] peer-checked:text-white"
                >
                  <img
                    src={getEmotions(4)}
                    alt=""
                    className="w-[24px] mb-[6px]"
                  />
                  <p className="text-[12px] font-[500] text-center">별로</p>
                </label>
              </li>
              <li className="flex flex-col">
                <input
                  id="radio05"
                  name="radioEmotion"
                  type="radio"
                  value={5}
                  onChange={onChangeRadio}
                  className="sr-only peer"
                />
                <label
                  htmlFor="radio05"
                  className="flex-col flex items-center bg-[#ececec] p-[14px] rounded-[6px] flex-1 peer-checked:bg-[#fd565f] peer-checked:text-white"
                >
                  <img
                    src={getEmotions(5)}
                    alt=""
                    className="w-[24px] mb-[6px]"
                  />
                  <p className="text-[12px] font-[500] text-center">
                    완전 별로
                  </p>
                </label>
              </li>
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
          <Button text="취소하기" />
          <Button text="작성완료" type="positive" onClick={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default New;
