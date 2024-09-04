import { useEffect } from "react";

export const Viewer = ({ count }: { count: number }) => {
  useEffect(() => {
    return () => {
        console.log("언마운트")
    }
  }, []);
  return (
    <>
      <p>현재 카운트</p>
      <p className="h-[20px]">{count % 2 === 0 ? count : null}</p>
    </>
  );
};
