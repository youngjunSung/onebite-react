import Header from "../components/Header";
import Button from "../components/Button";

const New = () => {
  return (
    <>
      <Header
        text="새 일기 쓰기"
        leftChild={<Button text="텍스트" type="default" />}
      />
      <h1>New</h1>
    </>
  );
};

export default New;
