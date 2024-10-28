import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  return (
    <>
      <Header
        text="헤더"
        leftChild={<Button text="텍스트" type="default" />}
        rightChild={
          <Button text="텍스트" type="default" onClick={() => alert()} />
        }
      />
      <div className="p-[12px] flex items-center">
        <select className="h-[38px] pr-[10px]">
          <option value="최신순">최신순</option>
          <option value="오래된 순">오래된 순</option>
        </select>
        <Button text="새 일기 쓰기" type="positive" className="ml-auto" onClick={() => nav('/new')} />
      </div>
    </>
  );
};

export default Home;
