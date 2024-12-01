import Button from "./Button";
import { getEmotions } from "../utils/getEmotions";
import { DiaryType } from "../typing/types";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// type DiaryItemType = Omit<DiaryType, "id">;

const DiaryItem = ({ id, createdDate, emotionId, content }: DiaryType) => {
  const nav = useNavigate();
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
    <li className="flex items-start mb-[10px] last:mb-0">
      <Link to={`/diary/${id}`} className="flex flex-1 min-w-0">
        <div
          className={`${getEmotionBg(
            emotionId
          )} basis-[100px] h-[80px] center mr-[10px] rounded-[6px] shrink-0`}
        >
          <img
            src={getEmotions(emotionId)}
            alt=""
            className="object-cover h-full"
          />
        </div>
        <div className="mr-[10px] flex-1 min-w-0">
          <p className="text-[14px] font-bold">{createdDate}</p>
          <p className="text-[12px] line-clamp-3">{content}</p>
        </div>
      </Link>
      <Button
        text="수정하기"
        className="w-fit"
        onClick={() => nav(`/edit/${id}`)}
      />
    </li>
  );
};

export default DiaryItem;
