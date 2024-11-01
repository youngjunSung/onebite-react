import { getEmotions } from "../utils/getEmotions";

const EmotionRadio = ({
  inputId,
  value,
  text,
  onChangeDate,
  isChecked,
}: {
  inputId: string;
  value: 1 | 2 | 3 | 4 | 5;
  text: string;
  onChangeDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
}) => {
  const bgClasses = {
    1: "peer-checked:bg-[#64c964]",
    2: "peer-checked:bg-[#9dd772]",
    3: "peer-checked:bg-[#fdce17]",
    4: "peer-checked:bg-[#fd8446]",
    5: "peer-checked:bg-[#fd565f]",
  };
  return (
    <li className="flex flex-col">
      <input
        id={inputId}
        name="radioEmotion"
        type="radio"
        value={value}
        onChange={onChangeDate}
        className="sr-only peer"
        checked={isChecked}
      />
      <label
        htmlFor={inputId}
        className={`flex-col flex items-center bg-[#ececec] p-[14px] rounded-[6px] flex-1 ${bgClasses[value]} peer-checked:text-white`}
      >
        <img src={getEmotions(value)} alt="" className="w-[24px] mb-[6px]" />
        <p className="text-[12px] font-[500] text-center">{text}</p>
      </label>
    </li>
  );
};
export default EmotionRadio;
