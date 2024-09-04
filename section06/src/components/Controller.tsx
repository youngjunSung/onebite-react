export const Controller = ({
  handleCount,
}: {
  handleCount: (value: number) => void;
}) => {
  return (
    <div>
      {[-1, -10, -100, 100, 10, 1].map((e) => {
        return (
          <button
            key={e}
            type="button"
            className="border border-gray-600 px-[10px]"
            onClick={() => handleCount(e)}
          >
            {e}
          </button>
        );
      })}
      {/* <button
        type="button"
        className="border border-gray-600 px-[10px]"
        onClick={() => handleCount(-1)}
      >
        -1
      </button>
      <button
        type="button"
        className="border border-gray-600 px-[10px]"
        onClick={() => handleCount(-10)}
      >
        -10
      </button>
      <button
        type="button"
        className="border border-gray-600 px-[10px]"
        onClick={() => handleCount(-100)}
      >
        -100
      </button>
      <button
        type="button"
        className="border border-gray-600 px-[10px]"
        onClick={() => handleCount(+100)}
      >
        +100
      </button>
      <button
        type="button"
        className="border border-gray-600 px-[10px]"
        onClick={() => handleCount(+10)}
      >
        +10
      </button>
      <button
        type="button"
        className="border border-gray-600 px-[10px]"
        onClick={() => handleCount(+1)}
      >
        1
      </button> */}
    </div>
  );
};
