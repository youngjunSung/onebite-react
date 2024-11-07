import { ReactNode } from "react";

const Header = ({text, leftChild, rightChild}: {text: string, leftChild?: ReactNode, rightChild?: ReactNode}) => {
    return (
        <header className="sticky top-0 bg-white grid grid-cols-[60px,1fr,60px] p-[12px] min-h-[62px]">
            <div className="center">{leftChild}</div>
            <h1 className="flex-1 font-bold center">{text}</h1>
            <div className="center">{rightChild}</div>
        </header>
    )
}

export default Header;