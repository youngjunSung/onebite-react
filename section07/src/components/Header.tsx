import dayjs from "dayjs"
import { memo } from "react"

export const Header = memo(() => {
    return (
        <h1 className="text-[#097be0] text-[20px] font-bold mb-[10px]">
          Hellow - {dayjs(new Date()).format("ddd MMM DD YYYY")}
        </h1>
    )
})
Header.displayName = 'Header';