import { useParams, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { DiaryStateContext } from "../App";
import { getEmotions } from "../utils/getEmotions";
import { DiaryType } from "../typing/types";

const Diary = () => {
  const { diary } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const getEditDiary = diaryList?.filter((e) => e.id === Number(diary))[0];
  console.dir(getEditDiary)
  const {id, createdDate, emotionId, content} = getEditDiary as DiaryType
  return (
    <>
      <h1>Diary</h1>
      <p>{getEditDiary?.content}</p>
      <img src={getEmotions(emotionId)} alt="" />
    </>
  );
};

export default Diary;
