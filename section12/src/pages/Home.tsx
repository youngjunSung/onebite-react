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
  useEffect(() => {
    setDate(dayjs().format("YYYY년 MM월"));
  }, []);
  return (
    <>
      <Header
        text={date}
        leftChild={
          <Button text={<KeyboardArrowLeftRounded />} type="default" />
        }
        rightChild={
          <Button text={<KeyboardArrowRightRounded />} type="default" />
        }
      />
      <DiaryList />
    </>
  );
};

export default Home;
