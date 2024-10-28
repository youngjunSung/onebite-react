import { ReactNode } from "react";

const Header = ({text, leftChild, rightChild}: {text: string, leftChild?: ReactNode, rightChild?: ReactNode}) => {
    return (
        <header className="grid grid-cols-[80px,1fr,80px] p-[12px]">
            <div>{leftChild}</div>
            <h1 className="flex-1 center">{text}</h1>
            <div>{rightChild}</div>
        </header>
    )
}

export default Header;