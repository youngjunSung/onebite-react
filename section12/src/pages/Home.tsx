import {  useEffect, useRef } from "react";
import Child from "../components/Child";

const data = ["aaa", "bbb", "ccc"];

const Home = () => {
  // const refDiv = useRef<HTMLDivElement>(null);
  const refDiv = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    console.log(refDiv)
  })
  return (
    <>
      {/* <Child ref={refDiv} title={"child compoentttt"} /> */}
      {data.map((e, idx) => {
        return <Child key={idx} ref={(el) => {
          if (el) refDiv.current[idx] = el
        }} title={e} />;
      })}
    </>
  );
};

export default Home;
