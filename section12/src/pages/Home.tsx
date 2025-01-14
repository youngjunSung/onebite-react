import {  useEffect, useRef, ForwardedRef } from "react";
import Child from "../components/Child";

const data = ["aaa", "bbb", "ccc"];

const Home = () => {
  const refDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(refDiv)
  })
  return (
    <>
      <Child ref={refDiv} title={"child compoentttt"} />
    </>
  );
};

export default Home;
