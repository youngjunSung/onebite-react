export const Button = ({ text, color = 'black', children }) => {
  return (
    <button style={{color: color}}>
      {text} - {color}
      {children}
    </button>
  );
};

Button.defaultProps = {
    text: '기본 텍스트',
    color: 'yellow'
}