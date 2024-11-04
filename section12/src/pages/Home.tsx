import Header from "../components/Header";
import Button from "../components/Button";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DiaryList from "../components/DiaryList";
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";
import dayjs from "dayjs";

const Home = () => {
  const nav = useNavigate();
  const [date, setDate] = useState<string>("");
  const onPrev = () => {
    setDate(dayjs(date).subtract(1, "month").format());
  };
  const onNext = () => {
    setDate(dayjs(date).add(1, "month").format());
  };
  useEffect(() => {
    setDate(dayjs().format());
  }, []);
  return (
    <>
      <Header
        text={dayjs(date).format("YYYY년 MM월")}
        leftChild={
          <Button
            text={<KeyboardArrowLeftRounded />}
            type="default"
            onClick={onPrev}
          />
        }
        rightChild={
          <Button
            text={<KeyboardArrowRightRounded />}
            type="default"
            onClick={onNext}
          />
        }
      />
      <DiaryList yeayMonth={dayjs(date).format("YYYY년 MM월")} />
    </>
  );
};

export default Home;
