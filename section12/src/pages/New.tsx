import Header from "../components/Header";
import Button from "../components/Button";
import { KeyboardBackspace } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

const New = () => {
  const nav = useNavigate();
  return (
    <>
      <Header
        text="새 일기 쓰기"
        leftChild={
          <button className="w-full center" onClick={() => nav(-1)}>
            <KeyboardBackspace />
          </button>
        }
      />
      <h1>New</h1>
    </>
  );
};

export default New;
