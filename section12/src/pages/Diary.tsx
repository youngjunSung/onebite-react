import Header from "../components/Header";
import Button from "../components/Button";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryStateContext } from "../App";
import { getEmotions } from "../utils/getEmotions";
import { DiaryType } from "../typing/types";
import { KeyboardBackspace } from "@mui/icons-material";

const Diary = () => {
  const nav = useNavigate();
  const { diary } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const getEditDiary = diaryList?.filter((e) => e.id === Number(diary))[0];
  console.dir(getEditDiary);
  const { id, createdDate, emotionId, content } = getEditDiary as DiaryType;
  const getEmotionBg = (emotionId: number) => {
    switch (emotionId) {
      case 1:
        return "bg-[#64c964]";
      case 2:
        return "bg-[#9dd772]";
      case 3:
        return "bg-[#fdce17]";
      case 4:
        return "bg-[#fd8446]";
      case 5:
        return "bg-[#fd565f]";
      default:
        return "bg-[#ececec]";
    }
  };
  return (
    <>
      <Header
        text={`${createdDate} 기록`}
        leftChild={
          <button className="w-full center" onClick={() => nav(-1)}>
            <KeyboardBackspace />
          </button>
        }
        rightChild={
          <Button text="수정하기" onClick={() => nav(`/edit/${id}`)} />
        }
      />
      <div className="p-[12px]">
        <div className="flex flex-col items-center mb-[20px]">
          <h2 className="font-[700] text-[14px] mb-[10px]">이날의 기분</h2>
          <div className={`${getEmotionBg(emotionId)} center rounded-[6px]`}>
            <img src={getEmotions(emotionId)} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-[700] text-[14px] mb-[10px]">내용</h2>
          <p className="p-[20px] bg-[#ececec] rounded-[6px] w-full font-[500] text-[12px]">
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default Diary;
