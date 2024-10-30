import Button from "./Button";
import { getEmotions } from "../utils/getEmotions";
import { DiaryType } from "../typing/types";

type DiaryItemType = Omit<DiaryType, 'id'>

const DiaryItem = ({createdDate, emotionId, content}: DiaryItemType) => {
  return (
    <li className="flex items-start mb-[10px] last:mb-0">
      <div className="bg-[#64c964] basis-[100px] h-[80px] center mr-[10px] rounded-[6px]">
        <img src={getEmotions(emotionId)} alt="" className="object-cover h-full" />
      </div>
      <div className="mr-[10px] flex-1">
        <p className="text-[14px] font-bold">{createdDate}</p>
        <p className="text-[12px] line-clamp-3">{content}</p>
      </div>
      <Button text="수정하기" className="w-fit" />
    </li>
  );
};

export default DiaryItem;
