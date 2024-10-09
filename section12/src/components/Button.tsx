const Button = ({ text, type, onClick }: { text: string, type: string, onClick?: () => void }) => {
	const getType = (type: string) => {
		switch (type) {
			case 'default':
				return 'bg-[#ececec]'
			case 'positive':
				return 'bg-[#87c670] text-white'
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
      className={`cursor-pointer ${getType(type)} rounded-[5px] text-[14px] center min-h-[38px] px-[10px] py-[4px]`}
    >
      {text}
    </button>
  );
};

export default Button;
