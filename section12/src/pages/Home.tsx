import Header from "../components/Header";
import Button from "../components/Button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DiaryList from "../components/DiaryList";
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";

const Home = () => {
  const nav = useNavigate();
  return (
    <>
      <Header
        text="헤더"
        leftChild={
          <Button text={<KeyboardArrowLeftRounded />} type="default" />
        }
        rightChild={
          <Button
            text={<KeyboardArrowRightRounded />}
            type="default"
            onClick={() => alert()}
          />
        }
      />
      <DiaryList />
    </>
  );
};

export default Home;
