import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ text, type, className, onClick }: { text: ReactNode, type: string, className?: string, onClick?: () => void }) => {
	const getType = (type: string) => {
		switch (type) {
			case 'default':
				return 'bg-[#ececec]'
			case 'positive':
				return 'bg-[#64c964] text-white'
			case 'negative':
				return 'bg-[#de6264] text-white'
			default:
				return 'bg-[#ececec]'
		}
	}
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(`cursor-pointer ${getType(type)} rounded-[5px] text-[14px] center w-full min-h-[38px] px-[10px] py-[4px] ${className}`)}
    >
      {text}
    </button>
  );
};

export default Button;
