import { getEmotions } from "../utils/getEmotions";

const EmotionRadio = ({
  inputId,
  value,
  checkedBg,
  text,
  onChangeDate,
  isChecked,
}: {
  inputId: string;
  value: number;
  checkedBg: string;
  text: string;
  onChangeDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
}) => {
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
        className={`flex-col flex items-center bg-[#ececec] p-[14px] rounded-[6px] flex-1 peer-checked:bg-[${checkedBg}] peer-checked:text-white`}
      >
        <img src={getEmotions(value)} alt="" className="w-[24px] mb-[6px]" />
        <p className="text-[12px] font-[500] text-center">{text}</p>
      </label>
    </li>
  );
};
export default EmotionRadio;
