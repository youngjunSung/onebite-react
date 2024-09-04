import { useState, useEffect, useRef } from "react";
import { Controller } from "./components/Controller";
import { Viewer } from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const isMount = useRef<undefined | boolean>();
  const handleCount = (value: number) => {
    setCount((prevCount) => prevCount + value);
  };
  useEffect(() => {
    console.log("마운트");
  }, []);
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("변화, 리렌더링");
  });

  // const [state, setState] = useState('');
  // const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setState(e.target.value);
  // };

  return (
    <>
      {/* <input type="text" value={state} onChange={handler} /> */}
      <h1 className="text-red-500">Simple Counter</h1>
      {count % 2 === 0 ? <Viewer count={count} /> : null}
      {/* <Viewer count={count} /> */}
      <Controller handleCount={handleCount} />
    </>
  );
}

export default App;
