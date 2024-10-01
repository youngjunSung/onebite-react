import { useParams, useSearchParams } from "react-router-dom";

const Diary = () => {
  const { diary } = useParams();
  const [params, setParams] = useSearchParams();
  console.dir(params.get('value'))
  return (
    <>
      <h1>Diary</h1>
      <p>{diary}</p>
    </>
  );
};

export default Diary;
