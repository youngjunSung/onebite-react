import { useState, useReducer } from "react";

// reducer 변환기
// -> 상태를 변환시키는 함수
// 새로운 state 값을 반환하면 state 값이 변한다.
function reducer(state, action) {
  // 인수1: 현재 state 값, 인수2: 요청한 dispatch 함수의 action 객체
  console.log(state, action);
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state + action.data;
    default:
      return state;
  }
  //   if (action.type === "INCREASE") {
  //     return state + action.data;
  //   }
}

export const Exam = () => {
  //   const [num, setNum] = useState(0);
  // dispatch : 보내다, 발송하다
  // -> 상태 변화 요청을 보내는 함수
  const [state, dispatch] = useReducer(reducer, 0); // 인수1: 리듀서 함수, 인수2: 상태 초기값
  const handlePlus = () => {
    // dispatch 함수 호출하여 상태 변화 요청
    // 객체 형태로 인수, action 객체 전달 -> reducer 함수를 호출한다
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };
  const handleMinus = () => {
    dispatch({
      type: "INCREASE",
      data: -1,
    });
  };
  return (
    <div>
      <p>{state}</p>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
};
