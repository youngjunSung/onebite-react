import Header from "../components/Header";
import Button from "../components/Button";
import { useState, useEffect, useRef } from "react";
import DiaryList from "../components/DiaryList";
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";
import dayjs from "dayjs";

const Home = () => {
  const [date, setDate] = useState<string>("");
  const onPrev = () => {
    setDate(dayjs(date).subtract(1, "month").format());
  };
  const onNext = () => {
    setDate(dayjs(date).add(1, "month").format());
  };
  useEffect(() => {
    setDate(dayjs().format());
  }, []);

  const refButtons = useRef<HTMLButtonElement[]>([]);
  const [pickedItems, setPickedItems] = useState([
    { name: "", price: 0 },
    { name: "", price: 0 },
    { name: "", price: 0 },
  ]);
  const items = [
    { name: "a", price: 1300 },
    { name: "b", price: 2100 },
    { name: "c", price: 3500 },
    { name: "d", price: 2700 },
    { name: "e", price: 1700 },
    { name: "f", price: 2200 },
  ];
  const getPickedItemLength = () => {
    return refButtons.current.filter((e) => e.ariaSelected === "true").length;
  };
  const handlePickItem = (idx: number) => {
    const isSelected = refButtons.current[idx].ariaSelected === "true";
    if (getPickedItemLength() >= 3 && !isSelected) {
      return;
    } else if (isSelected) {
      setPickedItems((prev) => {
        const newArr = [...prev];
        return newArr.map((e) => {
          if (e.name === items[idx].name) {
            return { name: "", price: 0 };
          } else {
            return e;
          }
        });
      });
      refButtons.current[idx].ariaSelected = String(!isSelected);
      return;
    }
    refButtons.current[idx].ariaSelected = String(!isSelected);
    setPickedItems((prev) => {
      const newArr = [...prev];
      newArr[newArr.findIndex((e) => e.name === "")] = items[idx];
      return newArr;
    });
  };
  return (
    <>
      <Header
        text={dayjs(date).format("YYYY년 MM월")}
        leftChild={
          <Button
            text={<KeyboardArrowLeftRounded />}
            type="default"
            onClick={onPrev}
          />
        }
        rightChild={
          <Button
            text={<KeyboardArrowRightRounded />}
            type="default"
            onClick={onNext}
          />
        }
      />
      <div className="px-[20px]">
        <div className="mb-[10px] flex items-center gap-[10px]">
          {pickedItems.map((item, idx) => {
            if (!item.name) {
              return (
                <div
                  key={idx}
                  className="flex flex-col min-h-[50px] items-center"
                >
                  Empty
                </div>
              );
            } else {
              return (
                <div
                  key={idx}
                  className="flex flex-col min-h-[50px] items-center"
                >
                  <b className="font-bold">{item.name}</b>
                  {item.price}
                </div>
              );
            }
          })}
        </div>
        <div className="flex gap-[10px]">
          {items.map((item, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => {
                  if (el) refButtons.current[idx] = el;
                }}
                onClick={() => handlePickItem(idx)}
                aria-selected={false}
                className="flex flex-col min-h-[50px] items-center aria-selected:text-red-600"
              >
                <b className="font-bold">{item.name}</b>
                {item.price}
              </button>
            );
          })}
        </div>
      </div>
      <DiaryList yeayMonth={dayjs(date).format("YYYY년 MM월")} />
    </>
  );
};

export default Home;
