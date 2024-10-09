import { useParams, useSearchParams } from "react-router-dom";

const Edit = () => {
  const { edit } = useParams();
  return (
    <>
      <h1>Edit</h1>
      <p>{edit}</p>
    </>
  );
};

export default Edit;
