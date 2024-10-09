import { ReactNode } from "react";

const Header = ({text, leftChild, rightChild}: {text: string, leftChild: ReactNode, rightChild: ReactNode}) => {
    return (
        <header className="flex items-center p-[6px]">
            <div>{leftChild}</div>
            <h1 className="flex-1 center">{text}</h1>
            <div>{rightChild}</div>
        </header>
    )
}

export default Header;