import dayjs from "dayjs"

export const Header = () => {
    return (
        <h1 className="text-[#097be0] text-[20px] font-bold mb-[10px]">
          {dayjs(new Date()).format("ddd MMM DD YYYY")}
        </h1>
    )
}